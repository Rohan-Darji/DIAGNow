import mongoose from "mongoose";

const prescriptionsSchema = new mongoose.Schema({
  secretPhrase: {
    type: String,
  },
  patientName: {
    type: String,
    required: true,
  },
  patientAge: {
    type: String,
    required: true,
  },
  medicineName: {
    type: String,
    required: true,
  },
  medicineDose: {
    type: String,
    required: true,
  },
  medicineStrength: {
    type: String,
    required: true,
  },
  medicineDuration: {
    type: String,
    required: true,
  },
  isExpired: {
    type: String,
    default: "false"
  },
});

export const Prescriptions = mongoose.model(
  "Prescription",
  prescriptionsSchema
);
