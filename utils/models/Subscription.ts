import mongoose, { Document, Model, Schema, model, models } from "mongoose";

const subscriptionSchema = new Schema(
  {
    type: { type: String, required: true },
    plan: { type: Schema.Types.Mixed, required: true },
    user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export const Subscription =
  models.Subscription || model("Subscription", subscriptionSchema);
