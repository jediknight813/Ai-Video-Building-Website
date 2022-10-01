import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import videoRoutes from './routes/videoRoutes.js'


const app = express();
dotenv.config()
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/video', videoRoutes)


app.get('/', (req, res) => {
    console.log("here!")
    res.send("hello world");
})


mongoose.connect((process.env.CONNECTION_URL))
 .then(() => app.listen(PORT, () => console.log("server running on port: 5000")))
 .catch((error) => console.log(error.message));



