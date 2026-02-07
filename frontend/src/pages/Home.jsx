import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard"; // ← ready to use!

import { MdOutlineAddBox } from "react-icons/md";

const API_URL = "http://localhost:5000/books"; // ← easy to change later

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);       // ← new: show errors nicely
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios
      .get(API_URL)
      .then((response) => {
        setBooks(response.data.data || response.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Failed to load books. Please try again later.");
        setLoading(false);
      });
  }, []);

  // Loading & error UI first
  if (loading) return <Spinner />;
  if (error) return <div className="text-center text-red-600 text-xl">{error}</div>;

  return (
    <div className="p-4">
      {/* HEADER */}
      <div className="flex justify-etween items-center mb-8">
        <h1 className="text-3xl font-bold">Books List</h1>
        <Link to="/books/create" aria-label="Add new book">
          <MdOutlineAddBox className="text-sky-800 text-4xl hover:text-sky-600 transition" />
        </Link>
      </div>

      {/* VIEW TOGGLE */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-6 py-2 rounded-lg font-medium transition ${
            showType === "table"
              ? "bg-sky-600 text-white"
              : "bg-sky-200 hover:bg-sky-300"
          }`}
          onClick={() => setShowType("table")}
        >
          Table View
        </button>
        <button
          className={`px-6 py-2 rounded-lg font-medium transition ${
            showType === "card"
              ? "bg-sky-600 text-white"
              : "bg-sky-200 hover:bg-sky-300"
          }`}
          onClick={() => setShowType("card")}
        >
          Card View
        </button>
      </div>

      {/* BOOKS DISPLAY */}
      {showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;