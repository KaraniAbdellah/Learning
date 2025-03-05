import express from "express";
import cors from "cors"
import 'dotenv/config'
import session from 'express-session';



const app = express();
app.use(express.json());
app.use(cors());
app.use(session({
    secret: "ThisIsMe",
    cookie: {
        sameSite: "strict"
    }
}));




app.listen(3001, () => {
    console.log(`✅ Port Running in ${3001}`);
});


