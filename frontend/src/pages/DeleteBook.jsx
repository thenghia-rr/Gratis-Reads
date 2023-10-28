import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useSnackbar } from "notistack";
import NavBar from "../components/header/NavBar";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`https://gratis-reads-api.vercel.app/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Delete Book was successfully", { variant: "success" });
        navigate("/table");
      })
      .catch((err) => {
        alert("An Error occurred while deleting. Please check console ");
        enqueueSnackbar(
          "An Error occurred while deleting. Please check console",
          { variant: "error" }
        );
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <NavBar />
      <div className="p-4 mt-[60px]">
        <BackButton />
        <h1 className="text-3xl py-4 font-bold dark:text-white">Delete Book</h1>
        {loading ? <Spinner /> : ""}
        <div className="flex items-center flex-col justify-center max-w-[600px] bg-slate-300 dark:bg-gray-800 border-2 border-sky-500 rounded-2xl mx-auto p-8 ">
          <h3 className="text-2xl pb-6 dark:text-white">
            Are you sure you want to delete this book ?
          </h3>
          <button
            className="bg-red-600 rounded-2xl px-4 py-2 text-xl text-white hover:blur-[0.4px]"
            onClick={handleDeleteBook}
          >
            Yes, delete it
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteBook;
