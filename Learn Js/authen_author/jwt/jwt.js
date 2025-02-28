const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());

const posts = [
    {id: 1, username: "John Deo"},
    {id: 2, username: "John Miller"},
    {id: 3, username: "Brayan Don"},
];

app.get("/posts", authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.body.username)); // Changed req.json to res.json
    console.log("Request Come To Get Method --> Posts");
});

app.post("/login", (req, res) => {
    console.log("Request Came To POST Method --> Login");
    const username = req.body.username;
    const user = { username: username };

    // Create Token
    const accessToken = jwt.sign(user, "SCREtKeY");
    res.json({ accessToken: accessToken });
});

// Create Middleware --> Verify Token && Check The User
function authenticateToken(req, res, next) { // Changed nex to next
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token === null) return res.sendStatus(401); // Changed senStatus to sendStatus

    jwt.verify(token, "SCREtKeY", (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next(); 
    });
}

app.listen(process.env.PORT || 3000, () => {
    console.log(`✅ Port Running in ${process.env.PORT || 3000}`);
});
