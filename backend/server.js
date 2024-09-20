import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
const app = express();

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

// Middleware to parse JSON payloads (from req.body)
app.use(express.json());
app.use(cookieParser());
// Using middlewares for authentication routes
app.use("/api/auth", authRoutes);

app.use("/api/messages", messageRoutes);
// Example root route
// app.get("/", (req, res) => {
//   res.send("App is ready");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`App is running on port ${PORT}`);
});
