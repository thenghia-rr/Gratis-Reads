import { useEffect, useState } from 'react'
import { useSnackbar } from 'notistack';
import API from '../api/axios.js';
import axios from 'axios'
import BooksCard from '../components/home/BooksCard'
import Spinner from '../components/Spinner'
import NavBar from '../components/header/NavBar';
import Proptypes from 'prop-types'
const BookCard = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { VERCEL_URL_API } = API;
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${VERCEL_URL_API}/books`)
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
      <NavBar/>
      <div className='mt-[60px] px-4 pt-4'>
       {loading ? <Spinner/>:  <BooksCard books={books}/>}
       </div>
    </>
  )
}

BookCard.propTypes = {
  books:  Proptypes.array
}
export default BookCard