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
    const secretPhrase = randomWords({exactly: 5, join: "-"})
    const newPrescription = await Prescriptions(req.body);
    const result = newPrescription.save()
    newPrescription.secretPhrase = secretPhrase
    console.log(`[Prescription ${newPrescription._id} Created]`)
    res.status(201).json(newPrescription);
  } catch (err) {
    res.status(400).json({message: err.message})
  }
}

export const getPrescriptionById = async (req, res) => {
  try {
    const prescriptionsData = await Prescriptions.find({_id: req.params.id});

    if (prescriptionsData.length === 0) {
      return res.status(404).josn({message: "Can't find this Prescrption"})
    }

    res.status(200).json(prescriptionsData[0])
  } catch (err) {
    res.status(500).json({message: err.message})
  }
};

export const updatePresciption = (req, res) => {
  res.send("Here is the update presc api");
};
