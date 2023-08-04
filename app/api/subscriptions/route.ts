import { NextResponse } from "next/server";
import { connectDB, closeDB } from "@/utils/db";
import { Cart } from "@/utils/models/Cart";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/helpers/authOptions";
import User from "@/utils/models/Users";
import { CartItem } from "@/utils/types/types";
import { Subscription } from "@/utils/models/Subscription";

export async function POST(req: Request, res: Response) {
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

    const start = new Date();
    const due = new Date();

    due.setMonth(due.getMonth() + 1);

    // Check if a subscription already exists for the user
    const existingSubscription = await Subscription.findOne({
      user,
      type: body.type,
      plan: body.plan,
    });

 

    if (!existingSubscription) {
      // Create a new subscription object
      const newSubscription = new Subscription({
        ...body,
        user,
        start,
        due,
      });

      // Save the new subscription to the database
      await newSubscription.save();
    } else {
      // Check if the existing subscription is less than a month old
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
      const subscriptionDate = existingSubscription.createdAt;
      // Check if the existing subscription type matches the new subscription type
      if (
        existingSubscription.type === body.type &&
        subscriptionDate >= oneMonthAgo
      ) {
        // If the subscription is less than a month old and has the same type, return an error
        return NextResponse.json(
          {
            error:
              "You already have an active subscription of the same type that is less than a month old",
          },
          { status: 400 }
        );
      }
    }

    // Get all subscriptions for the user after adding the new subscription
    const allSubscriptions = await Subscription.find({ user });

    return NextResponse.json(
      { subscriptions: allSubscriptions, success: true },
      { status: 201 }
    );
  } catch (err) {
   return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    await closeDB();
  }
}

export async function GET(req: Request, res: Response) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "You are not logged in" });
    }

    const user = await User.findById(session.user._id);
    if (!user) {
      return NextResponse.json({ message: "User does not exist" });
    }

    const subscriptions = await Subscription.find({ user: user._id, isPaid: false });

    if (!subscriptions) {
      return NextResponse.json({ message: "Cart is empty" });
    }

    return NextResponse.json({ subscriptions, success: true });
  } catch (err) {
    console.error(err);
    NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    await closeDB();
  }
}
