const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());


app.post("/login", (req, res) => {
    console.log("Request Came To POST Method --> Login");

    // Create Token
    const accessToken = jwt.sign(req.body, "SCREtKeY", {
        expiresIn: "1h",
    });
    res.json({ accessToken: accessToken });
});


app.post("/auth", (req, res) => {
    // Verfiy The Expiration of The Token
    console.log(req.body);
    const decode = jwt.verify(req.body.token, "SCREtKeY", (err, decode) => {
        if (err) {
            console.log("Token Expired");
            res.status(200).json({message: err});
        } else {
            res.status(200).json({message: decode});
            console.log("Token Is Valid");
        }
    });
    
});

app.post("/decode", (req, res) => {
    // Decodes without verification
    const decoded = jwt.decode(req.body.token,
        // Setting { complete: true } allows you to access both the header and the payload.
        { complete: true }
    ); 
    res.status(200).json({message: decoded});
}); 

app.post("/storeCookie", (req, res) => {
    // Store Token In Cookies
    res.cookie("token", req.body.token, {
        httpOnly: true, // makes cookies inaccessible to client-side scripts, like JavaScrip
        secure: true, // he user agent will include the cookie in an HTTP 
        // request only if the request is transmitted over a secure channel (typically HTTPS) 
        maxAge: 100000,
    });
});


app.listen(process.env.PORT || 3000, () => {
    console.log(`✅ Port Running in ${process.env.PORT || 3000}`);
});



