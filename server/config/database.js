import mongoose from "mongoose";
import "dotenv/config";

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
