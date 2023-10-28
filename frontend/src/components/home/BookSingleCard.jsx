import { useState } from "react";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { MdPublishedWithChanges } from "react-icons/md";
import BookModal from "./BookModal";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BookSingleCard = ({ book, index }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <>
      <div
        key={book._id}
        className={`min-w-[350px] border-2  bg-[#242424] h-[500px] rounded-2xl overflow-hidden drop-shadow-xl ${
          hoveredIndex !== null && hoveredIndex !== index ? "blur-[2px]" : ""
        }`}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className="h-[300px] w-full object-cover transform hover:scale-105 transition-transform hover:brightness-125"
          src={`${book.img}`}
          alt={`${book.title}`}
        />
        <div className="p-3 text-white">
          <h3 className="flex items-center text-2xl py-2 text-sky-500 font-bold text-ellipsis overflow-hidden whitespace-nowrap">
            <PiBookOpenTextLight className="inline-block mr-2 flex-shrink-0" />
            {book.title}
          </h3>
          <h4 className="py-2 flex items-center text-[16px] text-gray-200">
            <BiUserCircle className="inline-block mr-2" />
            {book.author}
          </h4>
          <p className="font-thin text-[14px]">
            <MdPublishedWithChanges className="inline-block mr-2" />
            {book.publishYear}
          </p>
          <Link
            to={`/table/books/details/${book._id}`}
            className="inline-flex items-center mt-4 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read More
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
          <BiShow
            className="absolute bottom-5 right-3 text-3xl text-sky-400 cursor-pointer hover:text-sky-200"
            onClick={() => setShowModal(true)}
          />
        </div>
      </div>
      {showModal && <BookModal book={book} onClose={() => setShowModal(false)} />}
    </>
  );
};

BookSingleCard.propTypes = {
  book: PropTypes.any,
  index: PropTypes.any,
};

export default BookSingleCard;
