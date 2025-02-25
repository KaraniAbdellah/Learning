// Start Index.js
const express = require("express");
const app = express();
const path = require("path");
const User = require("./mongo.js");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bcryptjs = require("bcryptjs");
const { verify } = require("crypto");


app.use(express.json());
app.use(cookieParser())
// express.urlencoded
/*
    middleware in ExpressJS is used to handle form submissions
*/
app.use(express.urlencoded({extended: false}));


async function hashPass(password) {
    const res = await bcryptjs.hash(password, 10);
    return res;
}

async function compare(password) {
    const res = await bcryptjs.compare(password, 10);
}


const templatePath = path.join(__dirname, "../templates");
app.set("view engine", "hbs");
app.set("views", templatePath);
 

// Start Making The REST API Routes
app.get("/", async (req, res) => {
    if (req.cookies.jwt) {
        const verify = jwt.verify(req.cookies.jwt, "ZU73Z9J8EUE8J38JZJZIUD");
        res.render("home", {name: verify.name});
    }
    console.log("Request Come From Axios for Getting Users");
    res.render("login");
});


app.get("/signup", async (req, res) => {
    console.log("Request Come From Axios for Posting Users");
    res.render("signup");
});

app.get("/home", async (req, res) => {
    console.log("Request Come From Axios for Posting Users");
});


app.post("/signup", async(req, res) => {
    const check = await User.findOne({email: req.body.email});
    console.log(check);
    try {
        if (check) {
            res.send("user already exit");
        } else {
            // Generate A Token
            const token = jwt.sign({name:req.body.email}, "ZU73Z9J8EUE8J38JZJZIUD");
            const data = {
                email: req.body.email,
                password: req.body.password,
                token: token
            }
            await User.insertMany([data]);
            res.render("home");
        }
    } catch (error) {
        res.send("Wrong Details");
    }
});

app.post("/login", async(req, res) => {
    const check = await User.findOne({email: req.body.email});
    const passCheck = await compare(req.body.password, check.password);
    try {
        if (check && passCheck) {
            res.cookie("jwt", check.token, {
                maxAge: 600000, // after 10min token will be expire
                httpOnly: true
            });
            res.render("home");
        } else {
            res.send("user already exit");
        }
    } catch (error) {
        res.send("Wrong Details");
    }
});


app.listen(3000, () => {
    console.log("Server Listening to Port 3000");
});


