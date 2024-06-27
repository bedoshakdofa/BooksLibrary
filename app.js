import express from "express";
import bookRouter from "./Routers/bookRouter.js";
import authorRouter from "./Routers/authorRouter.js";
const app = express();
app.use(express.json());

app.use("/books", bookRouter);
app.use("/author", authorRouter);
export default app;
