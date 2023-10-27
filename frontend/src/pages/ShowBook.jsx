import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import NavBar from "../components/header/NavBar";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://gratis-reads-server.onrender.com/books/${id}`)
      .then((res) => {
        setBook(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <NavBar />
      <div className="p-4 mt-[60px]">
        <BackButton />
        <h1 className="text-3xl my-4 dark:text-white">Show Book</h1>
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col mx-auto border-2 border-sky-400 rounded-xl w-fit p-4 bg-slate-300 dark:bg-gray-800">
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500 dark:text-white">
                Id
              </span>
              <span className="dark:text-slate-200 ">{book._id}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500 dark:text-white">
                Title
              </span>
              <span className="dark:text-slate-200 ">{book.title}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500 dark:text-white">
                Author
              </span>
              <span className="dark:text-slate-200 ">{book.author}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500 dark:text-white">
                Publish Year
              </span>
              <span className="dark:text-slate-200 ">{book.publishYear}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500 dark:text-white">
                Create Time
              </span>
              <span className="dark:text-slate-200 ">
                {new Date(book.createdAt).toString()}
              </span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500 dark:text-white">
                Last Upate Time
              </span>
              <span className="dark:text-slate-200 ">
                {new Date(book.updatedAt).toString()}
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShowBook;
