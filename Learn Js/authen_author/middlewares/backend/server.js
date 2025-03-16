import express from "express";
import 'dotenv/config';
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";


// Let's Create a Rest API
const rest_api = express();


// Let's Use Route
rest_api.use(express.json());
rest_api.use("/user", userRoutes);

// Let's Connect to Database
mongoose.connect(process.env.URI_BD).then(() => {
    console.log("Connect Succefully to Database");
}); 


// Let's Run The Rest Api
rest_api.listen((process.env.PORT), () => {
    console.log("Rest Api Running in PORT 3000");
});



