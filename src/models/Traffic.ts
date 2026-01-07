import mongoose, { Schema, model, models } from "mongoose";

const TrafficSchema = new Schema(
  {
    countryCode: {
      type: String,
      required: true,
      uppercase: true,
      index: true,
    },
    visits: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

export const Traffic = models.Traffic || model("Traffic", TrafficSchema);
