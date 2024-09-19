import express from "express";
import dotenv from "dotenv";

const app = express();

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

// Middleware to parse JSON payloads (from req.body)
app.use(express.json());

// Using middlewares for authentication routes
app.use("/api/auth", authRoutes);

// Example root route
// app.get("/", (req, res) => {
//   res.send("App is ready");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`App is running on port ${PORT}`);
});
