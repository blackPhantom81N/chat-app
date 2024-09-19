import express from "express";
import dotenv from "dotenv";

const app = express();

import authRoutes from "./routes/auth.routes.js";
dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  //root route http://localhost:5000/
  res.send("App is ready");
});

//Using middlewares for authentication
app.use("api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("App is running on port 8000");
});
