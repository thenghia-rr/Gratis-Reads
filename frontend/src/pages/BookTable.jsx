import { useState, useEffect } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import NavBar from "../components/header/NavBar";
import BooksTable from "../components/home/BooksTable";
import Proptypes from "prop-types";
import axios from "axios";
import Spinner from "../components/Spinner";
const BookTable = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://gratis-reads-api.vercel.app/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        enqueueSnackbar("Error while get data from API", { variant: "error" });
        console.log(err);
        setLoading(false);
      });
  }, [enqueueSnackbar]);
  return (
    <>
      <NavBar />
      <div className="mt-[60px] px-4 pt-4 relative">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl my-7 text-sky-500 dark:text-sky-500 font-bold">
            Books List
          </h1>
          <Link to="/books/create">
            <MdOutlineAddBox className="text-4xl text-sky-500 hover:text-sky-600 dark:text-sky-500 hover:dark:text-sky-400 transition-colors" />
          </Link>
        </div>
        {loading ? <Spinner/> : <BooksTable books={books} />}
      </div>
    </>
  );
};

BookTable.propTypes = {
  books: Proptypes.array,
};
export default BookTable;
