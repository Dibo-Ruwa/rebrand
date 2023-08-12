import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import User from "@/utils/models/Users";
import { connectDB, closeDB } from "@/utils/db";
import { Cart } from "@/utils/models/Cart";
import {
  generateActivationToken,
  generateToken,
} from "@/templates/authTemplates";
import { sendMail } from "@/utils/sendMail";
import { Resend } from "resend";
import SignUpTemplate from "@/templates/SignUpTemplate";

export async function POST(req: Request, res: Response) {
  try {
    await connectDB();

    if (!req.body)
      return NextResponse.json({ error: "Data is missing" }, { status: 400 });

    const body = await req.json();

    const { email, password } = body;

    // Check if user already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return new Response(
        "User already exists. Try entering other email address",
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hash(password, 12);

    // Create new user model
    const user = new User({
      ...body,
      password: hashedPassword,
    });

    // Save the new user model to database and store data
    const createdUser = await user.save();

    //ceate cart upon registration

    const cart = new Cart({
      user: user._id,
    });

    await cart.save();

    // @todo verification mail

    // const resend = new Resend("re_AErzxZ8q_BotHJgBjXCGaEYFZUL53662i");

    // const mail = await resend.emails.send({
    //   from: "Acme <onboarding@resend.dev>",
    //   to: user.email,
    //   subject: "Hello world",
    //   react: SignUpTemplate({
    //     firstName: user.firstName,
    //   }) as React.ReactElement,
    // });

    // console.log(mail)
    const activationEmailContent = generateActivationToken(user._id);

    // Use the sendMail utility to send the email
    const mail = await sendMail(
      email,
      "Activate Your Account",
      activationEmailContent
    );

    if (user && mail) {
      // Remove the password from the response
      createdUser.password = undefined;

      return NextResponse.json(
        {
          message:
            "User signed up successfuly!!!\n a verification email hs been sent to you\n please verify your account.",
          user,
          success: true,
        },
        { status: 201 }
      );
    } else {
      await user.remove();

      throw new Error("Unable to sign Up");
    }
  } catch (err) {
    return NextResponse.json(err);
  } finally {
    await closeDB();
  }
}
