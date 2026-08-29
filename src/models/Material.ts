import mongoose, { Document, Model, Schema } from "mongoose";

export interface IMaterial extends Document {
  code: string;
  title: string;
  category: "Lehrbuch" | "Testheft" | "Übungsbuch" | "Download" | "Didaktik";
  level: string;
  price: string;
  isbn: string;
  status: string;
}

const MaterialSchema = new Schema<IMaterial>(
  {
    code: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    category: { type: String, enum: ["Lehrbuch", "Testheft", "Übungsbuch", "Download", "Didaktik"], required: true },
    level: { type: String, required: true },
    price: { type: String, required: true },
    isbn: { type: String, required: true },
    status: { type: String, default: "Aktiv" },
  },
  { timestamps: true }
);

export const Material: Model<IMaterial> =
  (mongoose.models["Material"] as Model<IMaterial>) ||
  mongoose.model<IMaterial>("Material", MaterialSchema);
