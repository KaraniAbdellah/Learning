// Start Index.js
const express = require("express");
const app = express();
const path = require("path");


app.use(express.json());
// express.urlencoded
/*
    middleware in ExpressJS is used to handle form submissions
*/
app.use(express.urlencoded({extended: false}))


const templatePath = path.join(__dirname, "../templates");
const publicPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.set("views", templatePath);
app.set(express.static(publicPath));
 

// Start Making The REST API Routes
app.get("/", async (req, res) => {
    console.log("Request Come From Axios for Getting Users");
    res.render("login");
});


app.get("/signup", async (req, res) => {
    console.log("Request Come From Axios for Posting Users");
    res.render("signup");
});

app.get("/home", async (req, res) => {
    console.log("Request Come From Axios for Posting Users");
    res.render("home");
});


app.listen(3000, () => {
    console.log("Server Listening to Port 3000");
});


