import express from "express";
import cors from "cors";

import prescriptionsRoutes from "./routes/prescriptions.js";
import doctorsRoutes from "./routes/doctors.js"


import "./config/database.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to DiagNow");
});

app.use("/api/prescriptions", prescriptionsRoutes);
app.use("/api/doctors", doctorsRoutes);

app.all("*", (req, res) => {
  res.send("You tried to reach a route that doesn't exist!");
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
