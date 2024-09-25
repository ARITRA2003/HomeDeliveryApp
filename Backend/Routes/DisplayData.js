import  Express  from "express";
import mongoose from "mongoose";

const router = Express.Router();

router.post("/foodData",async(req,res)=>{
   try{
      // Check if global variables are initialized
      const fetched_data=mongoose.connection.db.collection("Food_items");
      const food_items = await fetched_data.find({}).toArray();
      const category_data=mongoose.connection.db.collection("Food_catagories");
      const food_categories = await category_data.find({}).toArray();

      res.send([food_items,food_categories]);
   }
   catch(e){
      console.error(e);
      res.status(500).json({ message: "Internal Server Error" });
   }
});

export default router;