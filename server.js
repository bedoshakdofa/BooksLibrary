import { config } from "dotenv";
import mongoose from "mongoose";
config({ path: "./config.env" });
import app from "./app.js";

mongoose.connect(process.env.DATABASE_URI).then(() => {
    console.log(`database is connected successfully`);
});

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
});
