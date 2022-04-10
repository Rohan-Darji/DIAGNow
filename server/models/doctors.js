import mongoose from "mongoose";

const doctorsSchema = new mongoose.Schema({
  
  name: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  qualifications: {
    type: String,
  },
  hospital: {
    type: String,
  },
});

export const Doctors = mongoose.model(
  "Doctor",
  doctorsSchema
);
