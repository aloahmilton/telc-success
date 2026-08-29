import mongoose, { Document, Model, Schema } from "mongoose";

export interface INewsItem extends Document {
  code: string;
  title: string;
  category: string;
  date: string;
  status: "Veröffentlicht" | "Entwurf";
}

const NewsItemSchema = new Schema<INewsItem>(
  {
    code: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: String, required: true },
    status: { type: String, enum: ["Veröffentlicht", "Entwurf"], default: "Veröffentlicht" },
  },
  { timestamps: true }
);

export const NewsItemModel: Model<INewsItem> =
  (mongoose.models["NewsItemModel"] as Model<INewsItem>) ||
  mongoose.model<INewsItem>("NewsItemModel", NewsItemSchema);
