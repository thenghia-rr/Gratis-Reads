import { useEffect, useState } from 'react'
import { useSnackbar } from 'notistack';
import axios from 'axios'
import BooksCard from '../components/home/BooksCard'
import Spinner from '../components/Spinner'
import NavBar from '../components/header/NavBar';
import Proptypes from 'prop-types'

const BookCard = () => {
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