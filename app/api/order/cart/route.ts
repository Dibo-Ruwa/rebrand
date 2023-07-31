import { closeDB, connectDB } from "@/utils/db";
import { authOptions } from "@/utils/helpers/authOptions";
import { Cart } from "@/utils/models/Cart";
import { Order } from "@/utils/models/Order";
import User from "@/utils/models/Users";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    await connectDB();
    let order;

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

    const existingCart = await Cart.findOne({ user: user._id });

    if (!existingCart) {
      // If no existing cart,throw new error
      return NextResponse.json({ error: "Data is missing" }, { status: 400 });
    } else {
      // If an existing cart is found, load orderItems
      order = new Order({
        orderItems: existingCart.cartItems,
        email: user.email,
        phone: user.phone,
        address: user.address,
        user,
        paymentId: body.referenceId,
      });

      await order.save();

      existingCart.cartItems = [];
      existingCart.total = 0;
      await existingCart.save();
    }

    return NextResponse.json({ order, success: true }, { status: 201 });
  } catch (err) {
    console.error(err);
    NextResponse.json({ error: "An error occurred" }, { status: 500 });
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
    console.error(err);
    NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    await closeDB();
  }
}
