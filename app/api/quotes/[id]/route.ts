import { NextResponse } from "next/server";
import User from "@/utils/models/Users";
import { connectDB, closeDB } from "@/utils/db";
import { Cart } from "@/utils/models/Cart";
import { generateToken } from "@/templates/authTemplates";
import ActivateAccount from "@/emails/ActivateAccount";
import sendEmail from "@/utils/resend";
import { sendMail } from "@/utils/sendMail";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/helpers/authOptions";
import {
  AdminHomeCleaningQuoteRequest,
  AdminLaundryQuoteRequest,
  UserQuoteRequestConfirmation,
} from "@/emails";
import moment from "moment";
import { Request } from "@/utils/models/Requests";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const id = params.id;

    if (!id) {
      return NextResponse.json(
        { error: "Quote ID is missing" },
        { status: 400 }
      );
    }

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "You are not logged in" });
    }

    const user = await User.findById(session.user._id);
    if (!user) {
      return NextResponse.json({ message: "User does not exist" });
    }

    const quote = await Request.findById(id); // Assuming Quote is your Mongoose model for quotes
    if (!quote) {
      return NextResponse.json({ message: "Quote does not exist" });
    }

    return NextResponse.json({ quote, success: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    await closeDB();
  }
}

export async function PUT(
  req: Request,
  { params, body }: { params: { id: string }; body: { status: string } }
) {
  try {
    await connectDB();

    const requestId = params.id;
    const newStatus = body.status;

    if (!requestId || !newStatus) {
      return NextResponse.json(
        { error: "Request ID and new status are required" },
        { status: 400 }
      );
    }

    const request = await Request.findById(requestId);

    if (!request) {
      return NextResponse.json({ message: "Request does not exist" });
    }

    if (newStatus === "paid") {
      // Perform any payment-related logic here, and update isPaid, refId, etc.
      request.isPaid = true;
      request.refId = "your-payment-reference"; // Update with the actual payment reference
    }

    request.status = newStatus;

    await request.save();

    return NextResponse.json(
      { message: "Request status updated successfully", success: true },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    await closeDB();
  }
}
