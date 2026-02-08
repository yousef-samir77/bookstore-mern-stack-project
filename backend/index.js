import express from "express";
import dotenv from 'dotenv/config';
import { PORT, mongoDBURL } from './config.js';
import mongoose from "mongoose";
import bookRoutes from "./routes/booksRoute.route.js";
import cors from 'cors';
const app = express();

// Log the MongoDB URL to verify it's being read correctly
/* console.log('ENV CHECK:', process.env.MONGODB_URL);
console.log('FROM ENV:', process.env.MONGODB_URL);
console.log('FROM CONFIG:', mongoDBURL); */

// Enable CORS for all routes
app.use(cors());
// Middleware to parse JSON request bodies
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Hello from Express server!");
});

app.use('/books', bookRoutes);

// Connect to MongoDB and start the server
mongoose
  .connect(mongoDBURL, {
    family: 4,
    serverSelectionTimeoutMS: 30000, // give it more time
  })
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });
