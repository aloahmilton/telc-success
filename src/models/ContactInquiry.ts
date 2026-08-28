import mongoose, { Document, Model, Schema } from "mongoose";

export interface IContactInquiry extends Document {
  name: string;
  email: string;
  topic: string;
  message: string;
  status: "Neu" | "In Bearbeitung" | "Erledigt";
  createdAt: Date;
}

const ContactInquirySchema = new Schema<IContactInquiry>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    topic: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, enum: ["Neu", "In Bearbeitung", "Erledigt"], default: "Neu" },
  },
  { timestamps: true }
);

export const ContactInquiry: Model<IContactInquiry> =
  (mongoose.models["ContactInquiry"] as Model<IContactInquiry>) ||
  mongoose.model<IContactInquiry>("ContactInquiry", ContactInquirySchema);
