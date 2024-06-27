import { Router } from "express";
import {
    addAuthor,
    deleteAuthor,
    getAllAuthor,
    getAuthorById,
    updateAuthor,
} from "../controllers/authorController.js";

const authorRouter = Router();

authorRouter.route("/").get(getAllAuthor).post(addAuthor);
authorRouter
    .route("/:id")
    .get(getAuthorById)
    .patch(updateAuthor)
    .delete(deleteAuthor);

export default authorRouter;
