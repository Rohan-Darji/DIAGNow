import express from "express";
const router = express.Router();

import {
  getAllPrescriptions,
  getPrescriptionById,
  createPrescription,
  updatePresciption,
  getPrescriptionByPhrase
} from "../controller/prescriptions.js";

router.get("/", getAllPrescriptions);
router.get("/:id", getPrescriptionById);
router.post("/new", createPrescription);
router.post("/getByPhrase", getPrescriptionByPhrase );
router.patch("/update", updatePresciption);

export default router;
