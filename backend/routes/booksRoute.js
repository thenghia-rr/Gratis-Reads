import express from 'express';
import { BookModal} from '../models/bookModel.js';

const router = express.Router();

// 1.Route for save a new book 
router.post('/', async (req, res) =>{
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear || !req.body.img) {
            return res.status(400).send({ 
                massage: "Send all required fields: title, author, publishYear, img"
            })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
            img: req.body.img
        }
        const book = await BookModal.create(newBook);
        res.status(200).send(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({massage: error.message});
    }
})

// 2.Route for get all books from database
router.get('/', async (req, res) => {
    try {
        const books = await BookModal.find({});
        return res.status(200).json({
            count: books.length,
            data: books
        });
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

// 3.Route for get one books from database
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const books = await BookModal.findById(id);
        return res.status(200).json({
            count: books.length,
            data: books
        });
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

// 4.Route for update one book 
router.put('/:id', async (req, res) => {
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear || !req.body.img){
            return res.status(400).send({
                message: "Send all required fields: title, author, publishYear, img"
            })
        }

        const { id } = req.params;
        const result = await BookModal.findByIdAndUpdate(id, req.body)
        if(!result){
            return res.status(404).send({
                message: "Book not found"
            })
        }
        else {
            return res.status(200).send({ message: "Book updated succesfully !" });
        }
        
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

// 5. Route for delete one book by ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await BookModal.findByIdAndDelete(id, req.body)
        if(!result){
            return res.status(404).send({
                message: "Book not found"
            })
        }
        else {
            return res.status(200).send({ message: "Book deleted succesfully !" });
        }
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

export default router;