import express, { json } from 'express';
import mongoose, { Mongoose, connect } from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import authenRoute from './routes/authenRoute.js'
import cors from 'cors';
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT;
const mongoDBURL = process.env.mongoDBURL;
// Middleware for parsing req.body
app.use(express.json()); // middleware để xử lý JSON
app.use(express.urlencoded({ extended: true })); // middleware để xử lý form data

// Middleware for handle CORS POLICY
// Option 1: Allow all origins with default CORS (*)
app.use(cors()); 

// Option 2: Allow custom origins 
// app.use(
//     cors({
//         origin: 'http://localhost:5000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type']
//     })
// )

app.get('/', (req, res) =>{
    res.status(200).send('Server Book-Store-MERN Project');
})

// Routes CRUD books
app.use('/books', booksRoute);

// Routes authenticate
app.use('/', authenRoute)
// connect database and listen port local
mongoose
    connect(mongoDBURL)
    .then(() => {
        console.log("App is connected to database");
        app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })

