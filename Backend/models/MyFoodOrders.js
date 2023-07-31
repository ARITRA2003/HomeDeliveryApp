import mongoose from "mongoose";

const FoodOrderSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique: true
    },
    myOrder:{
        type:Array,
        required:true,
    }
});

export const foodorder=mongoose.model("foodorder",FoodOrderSchema);