import mongoose, { Schema, model, models } from "mongoose";

const subscriptionSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    plan: {
      type: Schema.Types.Mixed,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    start: {
      type: Date,
      required: true,
    },
    due: {
      type: Date,
      required: true,
    },

    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Subscription =
  models.Subscription || model("Subscription", subscriptionSchema);
