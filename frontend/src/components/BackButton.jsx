import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

// eslint-disable-next-line react/prop-types
const BackButton = ({ desination = '/table' }) => {
  return (
    <div className='flex'>
        <Link
         to={desination} 
         className='bg-sky-500 text-white px-4 py-1 rounded-lg w-fit'
        >
        <BsArrowLeft className='text-2xl '/>
        </Link>
    </div>
  )
}

export default BackButton