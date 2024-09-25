import  Express  from "express";

const router = Express.Router();

router.post("/foodData",(req,res)=>{
   try{
      // Check if global variables are initialized
      if (!global.food_items || !global.food_categories) {
         return res.status(500).json({ message: "Food data not initialized" });
      }
      res.send([global.food_items,global.food_categories]);
      // console.log([global.food_items,global.food_categories])
   }
   catch(e){
      console.error(e);
      res.status(500).json({ message: "Internal Server Error" });
   }
});

export default router;