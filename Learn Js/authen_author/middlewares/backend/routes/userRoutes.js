import express from "express";
import {registerUser, loginUser, getMe} from "../controllers/userControlle.js";
import { protect } from "../middlwares/authMiddleware.js";


// Let's Create A Router
const userRoutes = express.Router();


// Let's Make EndPoints
userRoutes.post("/AddUser", registerUser);
userRoutes.post("/LoginUser", loginUser);
userRoutes.get("/GetMe", protect, getMe);



export default userRoutes;