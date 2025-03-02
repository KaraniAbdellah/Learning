const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());



app.listen(process.env.PORT || 3000, () => {
    console.log(`✅ Port Running in ${process.env.PORT || 3000}`);
});



