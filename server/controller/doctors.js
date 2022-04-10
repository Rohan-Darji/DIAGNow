import { Doctors } from "../models/doctors.js";


export const getDoctor = async (req, res) => {
  try {
    const doctorsData = await Doctors.find();
    res.json(doctorsData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getPrescriptionById = async (req, res) => {
  try {
    const doctorsData = await Doctors.find({ _id: req.params.id });

    if (doctorsData.length === 0) {
      return res.status(404).josn({ message: "Can't find this Prescrption" });
    }

    res.status(200).json(doctorsData[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const doctorLogin = async (req, res) => {
  const doctors = await Doctors.find({username: req.body.username})
  try {
    if(req.body.password === doctors[0].password) res.json({message: "Success", doctorId: doctors[0]._id})
    else res.json({message: "not allowed"})
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}

export const doctorLogout = (req, res) => {
  res.send("This is the doctorLogout route")
}