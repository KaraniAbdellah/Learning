const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());


app.post("/login", (req, res) => {
    console.log("Request Came To POST Method --> Login");
    const username = req.body.username;
    const user = { username: username };

    // Create Token
    const accessToken = jwt.sign(user, "SCREtKeY");
    res.json({ accessToken: accessToken });
});


app.post("/auth", (req, res) => {
    // Verfiy The Expiration of The Token
});



app.listen(process.env.PORT || 3000, () => {
    console.log(`✅ Port Running in ${process.env.PORT || 3000}`);
});
