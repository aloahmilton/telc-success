import mongoose, { Document, Model, Schema } from "mongoose";

export interface IExam extends Document {
  code: string;
  title: string;
  level: string;
  target: string;
  candidates: string;
  status: "Aktiv" | "In Überarbeitung" | "Archiviert";
}

const ExamSchema = new Schema<IExam>(
  {
    code: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    level: { type: String, required: true, index: true },
    target: { type: String, required: true },
    candidates: { type: String, default: "1.000" },
    status: { type: String, enum: ["Aktiv", "In Überarbeitung", "Archiviert"], default: "Aktiv" },
  },
  { timestamps: true }
);

export const Exam: Model<IExam> =
  (mongoose.models["Exam"] as Model<IExam>) ||
  mongoose.model<IExam>("Exam", ExamSchema);
