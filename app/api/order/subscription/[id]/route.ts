import { closeDB, connectDB } from "@/utils/db";
import { authOptions } from "@/utils/helpers/authOptions";
import { Subscription } from "@/utils/models/Subscription";
import { Order } from "@/utils/models/Order";
import User from "@/utils/models/Users";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { resend } from "@/utils/resend";
import SubscriptionConfirmation from "@/emails/SubscriptionOrder";
import moment from "moment";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    let order;

    const id = params.id;

    if (!req.body)
      return NextResponse.json({ error: "Data is missing" }, { status: 400 });

    const body = await req.json();
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "you are not loggedIn" });
    }

    const user = await User.findById(session.user._id);
    if (!user) {
      return NextResponse.json({ message: "user does not exist" });
    }

    const subscription = await Subscription.findByIdAndUpdate(
      id,
      { isPaid: true },
      { new: true }
    );

    if (!subscription) {
      // If no existing Subscription,throw new error
      return NextResponse.json({ error: "Data is missing" }, { status: 400 });
    } else {
      // If an existing Subscription is found, check if the item exists
      order = new Order({
        orderItems: subscription,
        type: "subscription",
        email: user.email,
        phone: user.phone,
        total: subscription.total,
        address: user.address,
        user,
        paymentId: body.referenceId,
      });

      const mail = await resend.emails.send({
        from: "email@diboruwa.com",
        to: user.email,
        subject: "Subscription Confirmed",
        react: SubscriptionConfirmation({
          customerName: user.firstName,
          service: subscription.type,
          plan: subscription.plan,
          startDate: moment(subscription.start).format("YYYY-MM-DD"),
          endDate: moment(subscription.due).format("YYYY-MM-DD"),
        }) as React.ReactElement,
      });

      await order.save();
    }

    return NextResponse.json({ order, success: true }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "An error occurred", err },
      { status: 500 }
    );
  } finally {
    await closeDB();
  }
}

export async function GET(req: Request, res: Response) {
  try {
    await connectDB();

    if (!req.body)
      return NextResponse.json({ error: "Data is missing" }, { status: 400 });

    const body = await req.json();
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "you are not loggedIn" });
    }

    const user = await User.findById(session.user._id);
    if (!user) {
      return NextResponse.json({ message: "user does not exist" });
    }

    const ordersHistory = await Order.find({ user });

    return NextResponse.json({ ordersHistory, success: true }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    await closeDB();
  }
}
