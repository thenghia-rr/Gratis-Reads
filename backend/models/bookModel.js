import mongoose from "mongoose";

const bookScheme = mongoose.Schema(
    {
        title: {type: String, required: true},
        author: {type: String, required: true},
        publishYear: {type: Number, required: true},
        img: {type: String, required: true}
    },
    {
        timestamps: true
    }
)

export const BookModal = mongoose.model('Book', bookScheme);