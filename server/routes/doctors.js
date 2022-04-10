import express from "express";
const router = express.Router();

import { getDoctor, doctorLogin, doctorLogout, getPrescriptionById } from "../controller/doctors.js";

router.get("/", getDoctor);
router.get("/:id", getPrescriptionById);
router.post("/login", doctorLogin);
router.post("/logout", doctorLogout);

export default router;
