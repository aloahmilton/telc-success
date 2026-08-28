import mongoose, { Document, Model, Schema } from "mongoose";

export interface IExamCenter extends Document {
  name: string;
  city: string;
  zip: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  nextExams: string[];
  accredited: boolean;
}

const ExamCenterSchema = new Schema<IExamCenter>(
  {
    name: { type: String, required: true },
    city: { type: String, required: true, index: true },
    zip: { type: String, required: true, index: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    website: { type: String, required: true },
    nextExams: [{ type: String }],
    accredited: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const ExamCenter: Model<IExamCenter> =
  (mongoose.models["ExamCenter"] as Model<IExamCenter>) ||
  mongoose.model<IExamCenter>("ExamCenter", ExamCenterSchema);
