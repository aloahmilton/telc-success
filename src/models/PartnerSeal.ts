import mongoose, { Document, Model, Schema } from "mongoose";

export interface IPartnerSeal extends Document {
  code: string;
  name: string;
  type: "Akkreditierung" | "Kooperation" | "Siegel";
  issuer: string;
  verified: boolean;
}

const PartnerSealSchema = new Schema<IPartnerSeal>(
  {
    code: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    type: { type: String, enum: ["Akkreditierung", "Kooperation", "Siegel"], default: "Siegel" },
    issuer: { type: String, required: true },
    verified: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const PartnerSeal: Model<IPartnerSeal> =
  (mongoose.models["PartnerSeal"] as Model<IPartnerSeal>) ||
  mongoose.model<IPartnerSeal>("PartnerSeal", PartnerSealSchema);
