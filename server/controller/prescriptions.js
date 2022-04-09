import { Prescriptions } from "../models/prescriptions.js";
import randomWords from "random-words"

export const getAllPrescriptions = async (req, res) => {
  try {
    const prescriptionsData = await Prescriptions.find();
    res.json(prescriptionsData)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
};

export const createPrescription = async (req, res) => {
  try {
    const secretPhrase = randomWords(10).join("-")
    const newPrescription = await Prescriptions(req.body);
    const result = newPrescription.save()
    newPrescription.secretPhrase = secretPhrase
    console.log(`[Prescription ${newPrescription._id} Created]`)
    res.status(201).json(newPrescription);
  } catch (err) {
    res.status(400).json({message: err.message})
  }
}

export const getPrescriptionById = (req, res) => {
  res.send("here is a prescription by Id");
};

export const updatePresciption = (req, res) => {
  res.send("Hre is the update presctipont apoi");
};
