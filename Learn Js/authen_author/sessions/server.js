import express from "express";
import cors from "cors"
import 'dotenv/config'
import session from 'express-session';



const app = express();
app.use(express.json());
app.use(cors());
/*
    sameSite: control if the cookie can be share between website
        strict: Means the cookie will only be sent when you're on the same website.
*/
app.use(session({
    secret: "ThisIsMe",
    cookie: {
        sameSite: "strict"
    }
}));


// Route to verify if session exists
app.get("/verify-session", (req, res) => {
    if (req.session.user) {
        res.json({ loggedIn: true, username: req.session.user.username });
    } else {
        res.json({ loggedIn: false });
    }
});

// Route to destroy the session (logout)
app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send("Could not log out.");
        }
        res.send(`<a href='http://localhost:3001/login'>Login</a>`);
    });
});

app.get("/login", (req, res) => {
    // Store user data or token in the session
     req.session.user = {
        username: "user123", // Example username
        token: "abc123xyz" // Example token
    };
    res.send("<a href='http://localhost:3001/logout'>Hello User --> LogOut</a>");
});


app.get("/", (req, res) => {
    if (req.session.user) {
        res.send(`<a href='http://localhost:3001/logout'>Welcome ${req.session.user.username} Logout</a>`);
    } else {
        res.send("<a href='http://localhost:3001/login'>Login</a>");
    }
});


app.listen(3001, () => {
    console.log(`✅ Port Running in ${3001}`);
});


