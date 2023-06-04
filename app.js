import express from "express";
import mongoose from "mongoose";
//import jwtMiddleware from './middleware/jwtMiddleware.js';
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import router from "./routes/Student-routes.js";
import Mess_router from "./routes/Mess-routes.js";

import  UserRouter from './routes/User-routes.js';
const app = express();
//const port = process.env.PORT || 5000;

// middleware
app.use(express.json());

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());
app.use('/student' ,router);
app.use('/mess' ,Mess_router);
app.use('/user' ,UserRouter);
app.use('/signup' ,UserRouter);
app.use('/login' ,UserRouter);
//app.use(jwtMiddleware);



    

mongoose.
connect("mongodb+srv://admin:qlAsZTjpXZ4fFuNO@cluster0.ln8aeal.mongodb.net/Mess_Backend?retryWrites=true&w=majority"

)
.then(() => console.log("connected to database"))
.then(() =>{
    app.listen(5000);
})
.catch((err) => console.log(err));


