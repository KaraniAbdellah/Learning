import express from "express";
import "./auth.js";
import passport from "passport";
import cors from "cors"
import 'dotenv/config'


const app = express();
app.use(express.json());
app.use(cors());


app.get("/auth/google/callback", 
    passport.authenticate("google", {
        failureRedirect: "/auth/failure", 
        successRedirect: "http://localhost:5173/protected"
        },
        (req, res) => {
    console.log("Request Wes Come for CallBack")
    }),
);

app.get("/auth/failure", (req, res) => {
    console.log("Hello failure");
    res.send("Somethign Wrong...");
});

app.get("/auth/google", passport.authenticate("google", { scope: ["email", "profile"] }), (req, res) => {
    console.log("request Come Succefully");
});



app.listen(process.env.PORT || 3000, () => {
    console.log(`✅ Port Running in ${process.env.PORT || 3000}`);
});


