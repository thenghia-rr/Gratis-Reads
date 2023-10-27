import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import PropTypes from "prop-types";

const BooksTable = ({ books }) => {
  return (
    <div className="w-full border-separate border-spacing-1 py-[20px]">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border dark:border-gray-600">
          <thead className="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name Book
              </th>
              <th scope="col" className="px-6 py-3 max-md:hidden">
                Author
              </th>
              <th scope="col" className="px-6 py-3 max-md:hidden">
                Publish Year
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr
                key={book._id}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index + 1}
                </th>
                <td className="px-6 py-4 text-base">{book.title}</td>
                <td className="px-6 py-4 text-base max-md:hidden">
                  {book.author}
                </td>
                <td className="px-6 py-4 text-base max-md:hidden">
                  {book.publishYear}
                </td>
                <td className="px-6 py-4 text-base">
                  <div className="flex justify-start gap-x-4">
                    <Link to={`/table/books/details/${book._id}`}>
                      <BsInfoCircle className="text-2xl text-green-800 dark:text-green-500" />
                    </Link>
                    <Link to={`/table/books/edit/${book._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-600 dark:text-yellow-500" />
                    </Link>
                    <Link to={`/table/books/delete/${book._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-600" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// BooksTable component yêu cầu prop books là một mảng và không được để trống.(Eslint)
BooksTable.propTypes = {
  books: PropTypes.array.isRequired,
};
export default BooksTable;
