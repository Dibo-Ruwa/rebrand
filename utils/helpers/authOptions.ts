import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { closeDB, connectDB } from "@/utils/db";
import User from "@/utils/models/Users";
import { compare } from "bcrypt";
import { UserType } from "../types/types";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB().catch((err) => {
          throw new Error(err);
        });

        const user = await User.findOne({ email: credentials?.email }).select(
          "+password"
        );

        if (!user) {
          throw new Error("Invalid email or password");
        }

        const isPasswordCorrect = await compare(
          credentials!.password,
          user.password
        );

        if (!isPasswordCorrect) {
          throw new Error("Invalid email or password");
        }
        user.password = undefined;
        await closeDB();

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/account/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user, trigger, session }) => {
      user && (token.user = user);

      if (trigger === 'update') {
        user && (token.user = user);
        return { ...token, ...session.user}
      }
      return { ...token, ...user };
    },
    session: async ({ session, token, trigger }) => {
      const user: UserType = token.user as UserType;

  
      session.user = user;

      return session;
    },
  },
};
