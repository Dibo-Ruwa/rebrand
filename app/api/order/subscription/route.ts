import { closeDB, connectDB } from "@/utils/db";
import { authOptions } from "@/utils/helpers/authOptions";
import { Subscription } from "@/utils/models/Subscription";
import { Order } from "@/utils/models/Order";
import User from "@/utils/models/Users";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function GET(req: Request, res: Response) {
  try {
    await connectDB();

    
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
