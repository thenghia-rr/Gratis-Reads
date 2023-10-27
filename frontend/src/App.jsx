import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import Login from "./pages/authen/Login";
import Signup from "./pages/authen/Signup";
import BookTable from './pages/BookTable' 
import BookCard from './pages/BookCard' 
const App = () => {
  return (
    <>
      <div className="app dark:bg-gray-900 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/create" element={<CreateBook />} />
          <Route path="/table/books/details/:id" element={<ShowBook />} />
          <Route path="/table/books/edit/:id" element={<EditBook />} />
          <Route path="/table/books/delete/:id" element={<DeleteBook />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/table" element={<BookTable />} />
          <Route path="/card" element={<BookCard />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
