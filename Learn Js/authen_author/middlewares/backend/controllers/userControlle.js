// Start Make UserControlle
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../model/userModel.js";
import asyncHandler from "express-async-handler";

/*
    asyncHandler function --> For Handling Errors
*/

// @desc Register new user
// @route Register POST /user/AddUser
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  console.log(name, email, password);

  if (!name || !email || !password) {
    res.status(400).send({ message: "All Inputs Required" });
  }

  // check If user Exit
  const userExists = await userModel.findOne({ email: email });
  if (userExists) {
    res.status(400).send({ message: "User Already Exists" });
  }

  // Hash The Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await userModel.create({
    name: name,
    email: email,
    password: hashedPassword,
  });
  if (user) {
    res.status(201).send({
        _id: user._id,
        name: name,
        email: email,
        password: password,
        token: generateToken(user._id),
    });
  } else {
    res.status(400).send({ message: "Invalid User Data" });
  }
});



// @desc Login new user
// @route Login POST /user/LoginUser
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  try {
    // check for User Email
    const { email, password, name } = req.body;
    const user = await userModel.findOne({ email: email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).send({
        name: name,
        email: email,
        password: password,
        token: generateToken(user._id),
      });
    }
    res.status(400).send({ message: "Invalid Credentials" });
  } catch (error) {
    res.status(400).send({ message: "Error" + error });
  }
});




// @desc Get User Data
// @route Login POST /user/GetMe
// @access Private
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "User Data Display" });
});

// Generate Token [JWT]
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export { registerUser, loginUser, getMe };
