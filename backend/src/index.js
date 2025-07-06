// Initiate the server
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import cookieParser from 'cookie-parser';
import { connectDB } from './lib/db.js';
import cors from 'cors';
import { app, server } from "./lib/socket.js";

dotenv.config();

app.use(express.json());
app.use(cookieParser());

// Enable CORS for any device (any origin)
app.use(cors({
  origin: "http://localhost:5173", // Allow requests from any origin/device
  credentials: true ,
  methods: ["GET", "POST", "DELETE", "PUT"]
}));

const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.get("/check", (req, res) => {
  console.log(process.env.JWT_SECRET);
  res.json({
    "message": "API is working..."
  });
});

server.listen(PORT, () => {
  console.log('Server is running on port: ' + PORT);
  connectDB();
});
