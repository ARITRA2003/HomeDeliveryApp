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
        dbName: "FoodDelivery",
    })
    .then(
        async()=>{
            console.log("Connected to DB");
            const fetched_data=mongoose.connection.db.collection("Food_items");
            const data = await fetched_data.find({}).toArray();
            const category_data=mongoose.connection.db.collection("Food_catagories");
            const catData = await category_data.find({}).toArray();
            global.food_items = data;
            global.food_categories = catData;
        }
    )
    .catch((e) => { console.log(e) });
}



