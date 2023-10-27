import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import PropTypes from "prop-types";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className=" fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-[600px] px-4 h-[400px] bg-slate-200 dark:bg-gray-800 rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h3 className="text-2xl w-fit px-4 py-1 bg-red-300 dark:bg-sky-500 dark:text-white rounded-lg">
          {book.publishYear}
        </h3>
        <h3 className="flex items-center text-2xl py-2 text-yellow-500 font-bold text-ellipsis overflow-hidden whitespace-nowrap">
          <PiBookOpenTextLight className="inline-block mr-2 flex-shrink-0" />
          {book.title}
        </h3>
        <h4 className="py-2 flex items-center text-[18px] text-sky-400 dark:text-sky-500" >
          <BiUserCircle className="inline-block mr-2" />
          {book.author}
        </h4>
        <p className="mt-4 dark:text-white">Anything You want to show</p>
        <p className="my-2 dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
          voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
          necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
          nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
          dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
          vitae voluptate sequi repellat!
        </p>
      </div>
    </div>
  );
};

BookModal.propTypes = {
  book: PropTypes.object,
  onClose: PropTypes.func,
};
export default BookModal;
