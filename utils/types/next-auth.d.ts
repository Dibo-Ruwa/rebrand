import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      _id: string;
      firstName: string;
      lastName: string;
      email: string;
      address?: string;
      lga?: string;
      city?: string;
      state?: string;
      phone?: string;
      role: string;
      emailVerified: boolean;
      accessToken: string;
    };
  }
}
