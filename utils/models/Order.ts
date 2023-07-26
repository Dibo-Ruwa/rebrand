import mongoose, { Schema, Document } from "mongoose";

export interface IOrder extends Document {
  orderNumber: string;
  amount: number;
  paid: boolean;
}

const OrderSchema: Schema = new Schema({
  orderNumber: { type: String, required: true },
  amount: { type: Number, required: true },
  paid: { type: Boolean, default: false },
});

export default mongoose.model<IOrder>("Order", OrderSchema);
