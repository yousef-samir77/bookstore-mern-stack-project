import express from "express";
import { Book } from "../models/bookModel.model.js";

const router = express.Router();

// Route for Save a new book
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "All fields are required: title, author, publishYear",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = await Book.create(newBook);
    res.status(200).send(book);
  } catch (error) {
    console.error("Error creating book:", error);
    res.status(500).send({ message: error.message });
  }
});
// route for GET all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).send({ message: error.message });
  }
});

// route for Get one book from database by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json({ data: book });
  } catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).send({ message: error.message });
  }
});

// Route for Update a book by ID
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).json({
        message: "All fields are required: title, author, publishYear",
      });
    }
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json({ data: updatedBook });
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).send({ message: error.message });
  }
});
// Route for Delete a book by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).send({ message: error.message });
  }
});

export default router;
