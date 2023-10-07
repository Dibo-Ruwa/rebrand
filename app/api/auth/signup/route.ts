import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import User from "@/utils/models/Users";
import { connectDB, closeDB } from "@/utils/db";
import { Cart } from "@/utils/models/Cart";
import { generateToken } from "@/templates/authTemplates";
import ActivateAccount from "@/emails/ActivateAccount";
import sendEmail from "@/utils/resend";

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

    const activationLink = generateToken(user._id);

    // Remove the password from the response
    createdUser.password = undefined;

    const baseUrl = process.env.BASE_URL;

    await sendEmail(
      user.email,
      "Activate Account",
      ActivateAccount({
        customerName: user.firstName,
        activationLink: `${baseUrl}/verifyMail/${activationLink}`,
      })
    );

    return NextResponse.json(
      {
        message:
          "User signed up successfuly!!!\n a verification email hs been sent to you\n please verify your account.",
        user,
        success: true,
      },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(err);
  } finally {
    await closeDB();
  }
}
