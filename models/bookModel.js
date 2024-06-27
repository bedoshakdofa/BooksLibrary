import { Schema, model, mongoose } from "mongoose";

const BookSchema = Schema({
    title: {
        type: String,
        required: [true, "title is required"],
    },
    content: {
        type: String,
        required: [true, "content is required"],
    },
    author: {
        type: String,
        required: [true, "author name is required"],
    },
    publishedDate: {
        type: Date,
        default: Date.now(),
    },
});

const bookModel = model("books", BookSchema);

export default bookModel;
