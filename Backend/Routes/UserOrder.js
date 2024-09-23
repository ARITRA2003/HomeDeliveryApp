import  Express  from "express";
import { foodorder } from "../models/MyFoodOrders.js";
const router = Express.Router();

router.post("/AllOrderData",async(req,res)=>{
   const {order_data,order_date,email}=req.body;

   let data=order_data;
   await data.splice(0,0,{Order_date:order_date});
   // res.send(data);
   let eID=await foodorder.findOne({'email':email});
   // res.send(eID);
   if(eID=== null){
      try{
        await foodorder.create({
            email:email,
            myOrder:[data]
          }).then(()=>{
             res.status(200).json({
                success:true
          })
        })
      }
      catch(e){
         console.log(e);
         res.sendStatus(400);
         return;
      }
   }
   else{
       try{
           await foodorder.findOneAndUpdate(
           {'email':email},
           {$push:{myOrder : data}}).then(()=>{
            return res.status(200).send({
                success:true
            })
           })
       }
       catch(error){
          console.log(error);
          res.sendStatus(400);
          return;
       }
   }
   return;
});


router.post("/getAllOrderData",async(req,res)=>{
   try{
      let data=await foodorder.findOne({'email':req.body.email}).exec();
      // console.log(data);
      if(data===null) res.json({data:{}});
      else res.json({data:data});
   }
   catch(e){
      res.send("server error",error.message);
   }
});

export default router;