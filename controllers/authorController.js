import authorModel from "../models/authorModel.js";
import ApiFeatuers from "../utils/ApiFeatuers.js";

import {
    Addfunction,
    DeleteFunction,
    GetAll,
    GetByID,
    UpdateFunction,
} from "./handleFactory.js";

export const addAuthor = Addfunction(authorModel);

export const updateAuthor = UpdateFunction(authorModel);

export const deleteAuthor = DeleteFunction(authorModel);

export const getAllAuthor = GetAll(authorModel);

export const getAuthorById = GetByID(authorModel);
