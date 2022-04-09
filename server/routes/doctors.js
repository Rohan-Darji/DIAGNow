import express from "express";
const router = express.Router();

import { getDoctor, doctorLogin, doctorLogout } from "../controller/doctors.js";

router.get("/", getDoctor);
router.post("/login", doctorLogin);
router.post("/logout", doctorLogout);

export default router;
