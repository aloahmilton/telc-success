import mongoose, { Document, Model, Schema } from "mongoose";

export interface ITraining extends Document {
  code: string;
  title: string;
  target: string;
  format: "Online Webinar" | "Präsenz" | "Hybrid";
  date: string;
  seats: string;
  status: string;
}

const TrainingSchema = new Schema<ITraining>(
  {
    code: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    target: { type: String, required: true },
    format: { type: String, enum: ["Online Webinar", "Präsenz", "Hybrid"], default: "Online Webinar" },
    date: { type: String, required: true },
    seats: { type: String, default: "15 Frei" },
    status: { type: String, default: "Buchbar" },
  },
  { timestamps: true }
);

export const Training: Model<ITraining> =
  (mongoose.models["Training"] as Model<ITraining>) ||
  mongoose.model<ITraining>("Training", TrainingSchema);
