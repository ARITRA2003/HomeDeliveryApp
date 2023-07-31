import  Express  from "express";

const router = Express.Router();

router.post("/foodData",(req,res)=>{
   try{
      res.send([global.food_items,global.food_categories]);
      // console.log([global.food_items,global.food_categories])
   }
   catch(e){
    console.error(e);
   }
});

export default router;