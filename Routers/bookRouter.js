import { Router } from "express";
import {
    AddBook,
    DeleteBook,
    GetBookByID,
    getAllbooks,
    updateBook,
} from "../controllers/bookControllers.js";

const bookRouter = Router();

bookRouter.route("/").post(AddBook).get(getAllbooks);
bookRouter.route("/:id").get(GetBookByID).patch(updateBook).delete(DeleteBook);

export default bookRouter;
