import bookModel from "../models/bookModel.js";
import {
    Addfunction,
    DeleteFunction,
    GetAll,
    GetByID,
    UpdateFunction,
} from "./handleFactory.js";

export const AddBook = Addfunction(bookModel);
export const getAllbooks = GetAll(bookModel);
export const GetBookByID = GetByID(bookModel);
export const updateBook = UpdateFunction(bookModel);
export const DeleteBook = DeleteFunction(bookModel);
