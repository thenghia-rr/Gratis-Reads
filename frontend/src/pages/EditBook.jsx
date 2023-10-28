import { useEffect, useState } from "react";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import NavBar from "../components/header/NavBar";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://gratis-reads-api.vercel.app/books/${id}`)
      .then((res) => {
        setTitle(res.data.data.title);
        setAuthor(res.data.data.author);
        setPublishYear(res.data.data.publishYear);
        setImg(res.data.data.img);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert(
          "An error occurred while get data from API. Please check console !"
        );
        console.log(err);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
      img,
    };
    setLoading(true);
    axios
      .put(`https://gratis-reads-api.vercel.app/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Edit book was successfully", { variant: "success" });
        navigate(`/table`);
      })
      .catch((err) => {
        setLoading(false);
        // alert('An error occurred while saving your edit. Please check console !')
        enqueueSnackbar(
          "An error occurred while edit book. Please check console",
          { variant: "error" }
        );
        console.log(err);
      });
  };
  return (
    <>
      <NavBar />
      <div className="p-4 mt-[60px]">
        <BackButton />
        <h1 className="text-3xl my-4 dark:text-white font-bold">Edit Book</h1>
        {loading ? <Spinner /> : ""}
        <div className="flex flex-col border-2 border-sky-500 rounded-xl max-w-[600px] bg-slate-300 dark:bg-gray-800 mx-auto p-4 ">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500 dark:text-sky-500">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-500 dark:bg-gray-400 outline-none rounded-lg dark:text-slate-100  px-4 py-2 mt-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500 dark:text-sky-500">
              Author
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border-2 border-gray-500 dark:bg-gray-400 outline-none rounded-lg dark:text-slate-100 px-4 py-2 mt-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500 dark:text-sky-500">
              Publish Year
            </label>
            <input
              type="text"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="border-2 border-gray-500 dark:bg-gray-400 outline-none rounded-lg dark:text-slate-100 px-4 py-2 mt-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500 dark:text-sky-500">
              Link Image Book
            </label>
            <input
              type="text"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              className="border-2 border-gray-500 dark:bg-gray-400 outline-none rounded-lg dark:text-slate-100 px-4 py-2 mt-2 w-full"
            />
          </div>
          <button
            className="p-2 bg-sky-300 m-8 hover:brightness-90"
            onClick={handleEditBook}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default EditBook;
