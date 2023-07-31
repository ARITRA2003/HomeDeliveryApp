import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
    CategoryName:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});

export const food_items=mongoose.model("food_items",FoodSchema);