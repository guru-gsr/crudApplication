import dotenv from "dotenv/config.js";
import express from "express";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/db.js";
import rankingRoutes from './routes/rankingRoutes.routes.js'
import { errorHandler } from "./middlewares/errorHandler.js";


const app=express();
const PORT=process.env.PORT || 3000;
app.use(express.json());

connectDB()


//routes
app.use("/api/players", rankingRoutes);


//error handler middleware
app.use(errorHandler);

const server=app.listen(PORT,()=>{
    console.log(`server is started at port ${PORT}`);
})