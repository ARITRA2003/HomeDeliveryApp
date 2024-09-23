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

const corsOptions = {
  origin: ["https://food-delivery-app-xkle-18atk312g-aritra-sens-projects.vercel.app"], // Replace with your allowed origins
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  credentials: true, // Allow cookies to be sent with requests
};

app.use(cors(corsOptions)); 

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