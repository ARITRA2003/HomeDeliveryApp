import mongoose from "mongoose";
const MONGO_URI = 'mongodb://localhost:27017';
// Database name
//Creating And Exporting the DataBase
export const connecToMongo = () => {
    mongoose.connect(MONGO_URI, {
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



