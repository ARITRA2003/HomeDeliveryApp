import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

// const MONGO_URI = process.env.MONGODB_URI;

const MONGO_URI = process.env.MONGODB_URI;

// console.log( process.env.MONGODB_URI);
// Database name
//Creating And Exporting the DataBase

export const connecToMongo = () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: process.env.DATABASENAME,
    })
    .then(
        async()=>{
            console.log("Connected to DB");
        }
    )
    .catch((e) => { console.log(e) });
}



