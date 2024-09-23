import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

// Middleware to parse JSON payloads (from req.body)
app.use(express.json());
app.use(cookieParser());
// Using middlewares for authentication routes
app.use("/api/auth", authRoutes);

app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
// Example root route
// app.get("/", (req, res) => {
//   res.send("App is ready");
// });

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`App is running on port ${PORT}`);
});
