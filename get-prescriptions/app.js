import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Successful to database.");
  })
  .catch((error) => {
    console.log(error);
  });

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
  medicineDuration2: {
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
    default: "false",
  },
});

const Prescriptions = mongoose.model("Prescription", prescriptionsSchema);

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to getPrescriptions");
});

app.post("/api/prescriptionById", async (req, res) => {
  try {
    const prescriptions = await Prescriptions.find({ _id: req.body.id });

    if (prescriptions.length === 0) {
      return res.status(404).json({ message: "can't find this prescription"});
    }
    res.status(200).json(prescriptions[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
