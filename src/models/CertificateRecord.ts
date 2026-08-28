import mongoose, { Document, Model, Schema } from "mongoose";

export interface ICertificateRecord extends Document {
  certCode: string;
  candidateName: string;
  examTitle: string;
  level: string;
  issueDate: Date;
  overallScore: string;
  isValid: boolean;
}

const CertificateRecordSchema = new Schema<ICertificateRecord>(
  {
    certCode: { type: String, required: true, unique: true, index: true },
    candidateName: { type: String, required: true },
    examTitle: { type: String, required: true },
    level: { type: String, required: true },
    issueDate: { type: Date, required: true },
    overallScore: { type: String, required: true },
    isValid: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const CertificateRecord: Model<ICertificateRecord> =
  (mongoose.models["CertificateRecord"] as Model<ICertificateRecord>) ||
  mongoose.model<ICertificateRecord>("CertificateRecord", CertificateRecordSchema);
