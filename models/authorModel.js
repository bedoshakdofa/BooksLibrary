import { Schema, model } from "mongoose";

const authorSchema = Schema({
    name: {
        type: String,
        requried: [true, "name is required"],
    },
    bio: String,
    birthDate: Date,
    books: [
        {
            type: Schema.ObjectId,
            ref: "books",
        },
    ],
});

authorSchema.pre(/^findById/, function (next) {
    this.populate("books");
    next();
});

const authorModel = model("authors", authorSchema);

export default authorModel;
