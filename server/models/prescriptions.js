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
  medicineName1: {
    type: String,
    required: true,
  },
  medicineDose1: {
    type: String,
    required: true,
  },
  medicineStrength1: {
    type: String,
    required: true,
  },
  medicineDuration1: {
    type: String,
  },
  medicineName2: {
    type: String,
  },
  medicineDose2: {
    type: String,
  },
  medicineStrength2: {
    type: String,
  },
  medicineDuration2: {
    type: String,
  },
  medicineDuration2: {
    type: String,
  },
  medicineName3: {
    type: String,
  },
  medicineDose3: {
    type: String,
  },
  medicineStrength3: {
    type: String,
  },
  medicineDuration3: {
    type: String,
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
