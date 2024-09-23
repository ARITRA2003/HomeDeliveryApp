import Express  from "express";
import {connecToMongo} from "./db.js";
import userRouter from "./Routes/UserCreate.js"
import FoodRouter from "./Routes/DisplayData.js"
import MycartRouter from "./Routes/UserOrder.js"
import cors from "cors";
import dotenv from "dotenv"

dotenv.config();


const app = Express();

const port = process.env.PORT || 27019;

// console.log( process.env.MONGODB_URI);

const databasename = "FoodDelivery";
//Connecting app to the DataBase
connecToMongo();

const fetchFoodItems=async(client) => {
    const connect = client.db(databasename);
    // Connect to collection
    const collection =await connect.collection("Food_items");
  
    await collection.find({}).toArray().then((ans) => {
        console.log(ans);
    });
}
//We can use json files
app.use(cors(
  
));
app.use(Express.json());
//Adding Usercreate 
app.use("/api/user",userRouter);
//Adding user foodorder
app.use("/api/auth",MycartRouter);
//Adding footitem
app.use("/api",FoodRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})