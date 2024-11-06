import Express from "express";
import { foodorder } from "../models/MyFoodOrders.js";
import Stripe from "stripe";

const router = Express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/AllOrderData", async (req, res) => {
   const { order_data, order_date, email } = req.body;

   let data = order_data;
   await data.splice(0, 0, { Order_date: order_date });
   // res.send(data);
   let eID = await foodorder.findOne({ 'email': email });
   // res.send(eID);
   if (eID === null) {
      try {
         await foodorder.create({
            email: email,
            myOrder: [data]
         }).then(() => {
            res.status(200).json({
               success: true
            })
         })
      }
      catch (e) {
         console.log(e);
         res.sendStatus(400);
         return;
      }
   }
   else {
      try {
         await foodorder.findOneAndUpdate(
            { 'email': email },
            { $push: { myOrder: data } }).then(() => {
               return res.status(200).send({
                  success: true
               })
            })
      }
      catch (error) {
         console.log(error);
         res.sendStatus(400);
         return;
      }
   }
   return;
});


router.post("/getAllOrderData", async (req, res) => {
   try {
      let data = await foodorder.findOne({ 'email': req.body.email }).exec();
      // console.log(data);
      if (data === null) res.json({ data: {} });
      else res.json({ data: data });
   }
   catch (e) {
      res.send("server error", error.message);
   }
});

router.post('/createCheckoutSession', async (req, res) => {
   const { amount } = req.body;

   try {
      const session = await stripe.checkout.sessions.create({
         payment_method_types: ['card'],
         line_items: [
            {
               price_data: {
                  currency: 'inr',
                  product_data: {
                     name: 'Order Payment',
                  },
                  unit_amount: amount,
               },
               quantity: 1,
            },
         ],
         mode: 'payment',
         success_url: process.env.NODE_ENV === 'production'
            ? "https://food-delivery-app-xkle-18atk312g-aritra-sens-projects.vercel.app"
            : "http://localhost:3000", // Your success redirect URL

         cancel_url: process.env.NODE_ENV === 'production'
            ? "https://food-delivery-app-xkle-18atk312g-aritra-sens-projects.vercel.app"
            : "http://localhost:3000", // Your cancel redirect URL
      });

      res.json({ id: session.id });
   } catch (err) {
      res.status(500).send('Error creating checkout session');
   }
});

export default router;