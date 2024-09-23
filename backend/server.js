import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();

// Middleware to parse JSON payloads (from req.body)
app.use(express.json());
app.use(cookieParser());
// Using middlewares for authentication routes
app.use("/api/auth", authRoutes);

app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(
  express.static(path.join(__dirname, "/frontend/chat-application/dist"))
);

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "frontend", "chat-application", "dist", "index.html")
  );
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`App is running on port ${PORT}`);
});
