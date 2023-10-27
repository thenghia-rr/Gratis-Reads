import PropTypes from 'prop-types';
import BookSingleCard from './BookSingleCard';

const BooksCard = ({ books }) => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-auto gap-6 py-[50px]">
           {books.map((book, index) => (
                <BookSingleCard key={book._id} book={book} index={index}/>
           ))}
        </div>
    );
};

// BooksTable component yêu cầu prop books là một mảng và không được để trống.(Eslint)
BooksCard.propTypes = {
    books: PropTypes.array.isRequired,
};
export default BooksCard;
