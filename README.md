# Bookstore MERN Stack Project

A full‑stack MERN (MongoDB, Express, React, Node.js) CRUD app to manage a collection of books. It includes a React + Vite frontend with Tailwind CSS and a Node/Express backend using Mongoose.

## Features

- Create, read, update, and delete books
- Table and card views for browsing
- Modal preview for book details
- Loading and error states
- Snackbar notifications
- REST API with Express and Mongoose

## Tech Stack

**Frontend**
- React 19 + Vite
- React Router
- Axios
- Tailwind CSS
- Notistack
- React Icons

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- CORS

## Project Structure

```
backend/
  config.js
  index.js
  models/
    bookModel.model.js
  routes/
    booksRoute.route.js

frontend/
  index.html
  src/
    App.jsx
    main.jsx
    pages/
      Home.jsx
      CreateBook.jsx
      EditBook.jsx
      DeleteBook.jsx
      ShowBook.jsx
    components/
      BackButton.jsx
      Spinner.jsx
      home/
        BooksTable.jsx
        BooksCard.jsx
        BookSingleCard.jsx
        BookModal.jsx
```

## API Endpoints

Base URL: `http://localhost:5000/books`

- `POST /` — Create a book
- `GET /` — Get all books
- `GET /:id` — Get a book by ID
- `PUT /:id` — Update a book
- `DELETE /:id` — Delete a book

## Getting Started

### 1) Clone the repo

```sh
git clone https://github.com/yousef-samir77/bookstore-mern-stack-project.git
cd bookstore-mern-stack-project
```

### 2) Backend setup

```sh
cd backend
npm install
npm run dev
```

Server runs on `http://localhost:5000`

### 3) Frontend setup

```sh
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

## Environment

Database connection is configured in:

- [backend/config.js](backend/config.js)

Update `mongoDBURL` to your MongoDB connection string.

## Screens / Pages

- Home (table + card view)
- Create Book
- Edit Book
- Delete Book
- Show Book

## Notes

- Uses Tailwind CSS via Vite.
- React Router handles navigation.
- Axios handles HTTP requests.

## License

This project is for educational/portfolio purposes.
