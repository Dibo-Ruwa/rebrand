import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import User from "@/utils/models/Users";
import { connectDB, closeDB } from "@/utils/db";

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

    // Remove the password from the response
    createdUser.password =  undefined

    return NextResponse.json(
      { createdUser, success: true },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    NextResponse.json(err);
  } finally {
    await closeDB();
  }
}
