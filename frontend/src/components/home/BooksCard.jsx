import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import BookSingleCard from "./BookSingleCard";

const BooksCard = ({ books }) => {  // ← Accept the prop here
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {books.map((book) => (  // ← Use the prop (lowercase books)
        <BookSingleCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default BooksCard;