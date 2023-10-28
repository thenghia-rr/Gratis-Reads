import { useState } from 'react';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack'
import NavBar from '../components/header/NavBar';

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [img, setImg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
      img
    }
    setLoading(true);
    axios
      .post('https://gratis-reads-api.vercel.app/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Create a new book successfully', {variant: 'success'});
        navigate('/');
      })
      .catch(err => {
        setLoading(false);
        // alert('An error occurred while saving. Please check console !')
        enqueueSnackbar('Error occurred while saving. Please check console', {variant: 'error'});
        console.log(err);
      })
  }
  return (
    <div className='p-4 mt-[60px]'>
      <NavBar />
      <BackButton />
      <h1 className='text-3xl my-4 font-bold dark:text-white'>Create Book</h1>
      {loading ? <Spinner/> : ''}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl max-w-[600px] bg-slate-300 dark:bg-gray-800 mx-auto p-4">
        <div className="my-4">
            <label className='text-xl mr-4 text-gray-500 dark:text-sky-500'>Title</label>
            <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='border-2 border-gray-500 mt-2 px-4 py-2 w-full rounded-lg outline-none dark:bg-gray-400 dark:text-slate-100'
            />
        </div>
        <div className="my-4">
            <label className='text-xl mr-4 text-gray-500 dark:text-sky-500'>Author</label>
            <input 
                type="text" 
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className='border-2 border-gray-500 mt-2 px-4 py-2 w-full rounded-lg outline-none dark:bg-gray-400 dark:text-slate-100'
            />
        </div>
        <div className="my-4">
            <label className='text-xl mr-4 text-gray-500 dark:text-sky-500'>Publish Year</label>
            <input 
                type="text" 
                value={publishYear}
                onChange={(e) => setPublishYear(e.target.value)}
                className='border-2 border-gray-500 mt-2 px-4 py-2 w-full rounded-lg outline-none dark:bg-gray-400 dark:text-slate-100'
            />
        </div>
        <div className="my-4">
            <label className='text-xl mr-4 text-gray-500 dark:text-sky-500'>Link Image Book</label>
            <input 
                type="text" 
                value={img}
                onChange={(e) => setImg(e.target.value)}
                className='border-2 border-gray-500 mt-2 px-4 py-2 w-full rounded-lg outline-none dark:bg-gray-400 dark:text-slate-100'
            />
        </div>
        <button className='p-2 bg-sky-300 m-8 hover:brightness-90' onClick={handleSaveBook}>Save</button>
      </div>
    </div>
  )
}

export default CreateBook