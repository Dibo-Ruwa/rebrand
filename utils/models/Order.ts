import mongoose, { Schema, model, models } from "mongoose";

const orderSchema = new Schema(
  {
    orderItems: {
      type: Schema.Types.Mixed,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    paymentId: {
      type: String,
      required: true,
      unique: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Order = models.Order || model("Order", orderSchema);
