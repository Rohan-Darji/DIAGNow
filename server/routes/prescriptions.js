import express from "express";
const router = express.Router();

import {
  getAllPrescriptions,
  getPrescriptionById,
  createPrescription,
  updatePresciption,
} from "../controller/prescriptions.js";

router.get("/", getAllPrescriptions);
router.get("/:id", getPrescriptionById);
router.post("/new", createPrescription);
router.patch("/update/:id", updatePresciption);

export default router;
