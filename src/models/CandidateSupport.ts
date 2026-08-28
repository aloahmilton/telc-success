import mongoose, { Document, Model, Schema } from "mongoose";

export interface ICandidateSupport extends Document {
  candidateName: string;
  email: string;
  phone?: string;
  targetExam: string; // e.g. "telc Deutsch B2"
  requestedServices: string[]; // ["Exam Preparation", "Registration Assistance", etc.]
  notes?: string;
  status: "Eingegangen" | "In Bearbeitung" | "Bestätigt";
  createdAt: Date;
}

const CandidateSupportSchema = new Schema<ICandidateSupport>(
  {
    candidateName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    targetExam: { type: String, default: "telc Deutsch B2" },
    requestedServices: [{ type: String }],
    notes: { type: String },
    status: { type: String, enum: ["Eingegangen", "In Bearbeitung", "Bestätigt"], default: "Eingegangen" },
  },
  { timestamps: true }
);

export const CandidateSupport: Model<ICandidateSupport> =
  (mongoose.models["CandidateSupport"] as Model<ICandidateSupport>) ||
  mongoose.model<ICandidateSupport>("CandidateSupport", CandidateSupportSchema);
