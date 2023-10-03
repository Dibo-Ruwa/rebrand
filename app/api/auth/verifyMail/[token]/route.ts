import OnboardingTemplate from "@/emails/Onboarding";
import { verifyMailToken } from "@/templates/authTemplates";
import { closeDB, connectDB } from "@/utils/db";
import User from "@/utils/models/Users";
import { resend } from "@/utils/resend";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { token: string } }
) {
  try {
    await connectDB();

    const token = params.token;

    const decoded = verifyMailToken(token);

    const user = await User.findById(decoded?.payload?.userId);
    if (!user) {
      throw new Error("Invalid email or password");
    }
    user.emailVerified = true;

    await user.save();

    const mail = await resend.emails.send({
      from: "email@diboruwa.com",
      to: user.email,
      subject: "Welcome",
      react: OnboardingTemplate({
        customerName: user.firstName,
      }) as React.ReactElement,
    });

    console.log(mail);

    return NextResponse.json(
      { success: true, message: "Account activated Successfully!!!" },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "An error occurred", err },
      { status: 500 }
    );
  } finally {
    await closeDB();
  }
}
