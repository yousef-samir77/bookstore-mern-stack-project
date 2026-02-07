import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";  // ← comment out until it's ready

import { MdOutlineAddBox } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table"); // "table" or "card"

  useEffect(() => {
    setLoading(true);

    axios
      .get("http://localhost:5000/books")
      .then((response) => {
        setBooks(response.data.data || response.data || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="p-4">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>

      {/* VIEW TOGGLE – centered buttons */}
      <div className="flex justify-center items-center gap-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg font-medium transition ${
            showType === "table"
              ? "bg-sky-600 text-white"
              : "bg-sky-300 text-black hover:bg-sky-400"
          }`}
          onClick={() => setShowType("table")}
        >
          Table View
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition ${
            showType === "card"
              ? "bg-sky-600 text-white"
              : "bg-sky-300 text-black hover:bg-sky-400"
          }`}
          onClick={() => setShowType("card")}
        >
          Card View
        </button>
      </div>

      {/* CONDITIONAL RENDER – this is the key part! */}
      {showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} /> // ← uncomment when you create this component
      )}
    </div>
  );
};

export default Home;
