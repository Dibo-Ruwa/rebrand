import { closeDB, connectDB } from "@/utils/db";
import { authOptions } from "@/utils/helpers/authOptions";
import { Order } from "@/utils/models/Order";
import User from "@/utils/models/Users";
import { sendMail } from "@/utils/sendMail";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    await connectDB();

    const body = await req.json();

    const { email, subject, message } = body;

    // await sendMail("z3phyronsnides@gmail.com", subject, message);

    return NextResponse.json(
      { message: "emails sent successfully", success: true },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    await closeDB();
  }
}
