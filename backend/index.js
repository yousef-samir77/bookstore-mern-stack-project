import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import bookRoutes from "./routes/booksRoute.route.js";
import cors from 'cors';
const app = express();

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
