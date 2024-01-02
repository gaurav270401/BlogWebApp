import express, { Router } from "express";
import connection from "./database/db.js";
import dotenv from 'dotenv';
import Routes from "./route/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app= express();
dotenv.config();


app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use("/",Routes);


const username=process.env.DB_Username;
const password=process.env.DB_Password;
connection(username,password);

app.listen(8000,()=>console.log("Server is succesfully running on port 3000"));