import OrderConfirmation from "@/emails/FoodOrder";
import { closeDB, connectDB } from "@/utils/db";
import { authOptions } from "@/utils/helpers/authOptions";
import { Cart } from "@/utils/models/Cart";
import { Order } from "@/utils/models/Order";
import User from "@/utils/models/Users";
import { resend } from "@/utils/resend";
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
      const partners = await User.find({
        role: "partner",
        state: user.state,
        city: user.city,
      });

      let assigned = false;

      for (const partner of partners) {
        const today = new Date();


        const partnersOrders = await Order.find({
          partner: partner._id,
          createdAt: {
            $gte: new Date(
              today.getFullYear(),
              today.getMonth(),
              today.getDate()
            ),
            $lte: new Date(
              today.getFullYear(),
              today.getMonth(),
              today.getDate() + 1
            ),
          },
        });

        if (partnersOrders.length < 5) {
          order = new Order({
            orderItems: existingCart.cartItems,
            type: "cart",
            email: user.email,
            phone: user.phone,
            address: user.address,
            total: existingCart.total,
            partner: partner._id,
            user,
            paymentId: body.referenceId,
          });

          await order.save();

          assigned = true

          const mail = await resend.emails.send({
            from: "email@diboruwa.com",
            to: user.email,
            subject: "Order Confirmed",
            react: OrderConfirmation({
              customerName: user.firstName,
              orderItem: {
                orderItems: existingCart.cartItems,
                total: existingCart.total,
                estimatedDeliveryTime: "3 working days",
              },
            }) as React.ReactElement,
          });
    
          existingCart.cartItems = [];
          existingCart.total = 0;
          await existingCart.save();
          break
        }
      }

      if (!assigned) {
        order = new Order({
          orderItems: existingCart.cartItems,
          type: "cart",
          email: user.email,
          phone: user.phone,
          address: user.address,
          total: existingCart.total,
          user,
          paymentId: body.referenceId,
        });

        await order.save();


        const mail = await resend.emails.send({
          from: "email@diboruwa.com",
          to: user.email,
          subject: "Order Confirmed",
          react: OrderConfirmation({
            customerName: user.firstName,
            orderItem: {
              orderItems: existingCart.cartItems,
              total: existingCart.total,
              estimatedDeliveryTime: "3 working days",
            },
          }) as React.ReactElement,
        });
  
        existingCart.cartItems = [];
        existingCart.total = 0;
        await existingCart.save();
     }

    

     
    }

    return NextResponse.json({ order, success: true }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
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
