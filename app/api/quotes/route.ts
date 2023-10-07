import { NextResponse } from "next/server";
import { hash } from "bcrypt";
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

export async function POST(req: Request, res: Response) {
  try {
    await connectDB();

    const body = await req.json();

    console.log("ooooo");

    if (!req.body)
      return NextResponse.json({ error: "Data is missing" }, { status: 400 });
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "you are not loggedIn" });
    }

    const user = await User.findById(session.user._id);
    if (!user) {
      return NextResponse.json({ message: "user does not exist" });
    }

    const { data } = body;
    // console.log(type, quote);
    const timestamp = moment().format("YYYY-MM-DD HH:mm:ss");
    const turnaroundTime = moment().add(1, "day").format("YYYY-MM-DD HH:mm:ss");

    const quoteText = data.quote
      .filter((item: any) => item.amount > 0)
      .map((item: any) => `${item.name} -- ${item.amount}`)
      .join(", ");

    await sendEmail(
      user.email,
      "new Quote",
      UserQuoteRequestConfirmation({
        firstName: user.firstName,
        serviceType: data.type,
        description: quoteText,
        timestamp: timestamp,
        turnaroundTime: turnaroundTime,
        adminContact: "info@diboruwa.com",
      })
    );

    if (data.type === "laundry") {
      await sendEmail(
        user.email,
        "new Quote",
        AdminLaundryQuoteRequest({
          adminName: "Ibrahim",
          userName: `${user.firstName} ${user.lastName}`,
          userEmail: user.email,
          userContact: user.phone,
          userAddress: `${user.address}, ${user.lga}, ${user.city}, ${user.state}`,
          laundryItems: data.quote,
        })
      );
    } else if (data.type === "cleaning") {
      await sendEmail(
        user.email,
        "new Quote",
        AdminHomeCleaningQuoteRequest({
          adminName: "Ibrahim",
          userName: `${user.firstName} ${user.lastName}`,
          userEmail: user.email,
          userContact: user.phone,
          userAddress: `${user.address}, ${user.lga}, ${user.city}, ${user.state}`,
          homeCleaningAreas: quote,
        })
      );
    }

    return NextResponse.json(
      { message: "emails sent successfully", success: true },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(err);
  } finally {
    await closeDB();
  }
}
