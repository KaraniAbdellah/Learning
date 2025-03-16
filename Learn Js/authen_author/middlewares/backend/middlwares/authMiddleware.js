import jwt from "jsonwebtoken";
import asyncHandler from 'express-async-handler';
import userModel from '../model/userModel.js';


// The request should include the token in the Authorization header:
/*
    1. user login with email and password 
        - If the credentials are correct server generate JWT token

    2. User Send an Authenticated Request in Login [Second Time]
        - When making a request to a protected route (GET /user/getMe), 
            the client must include the token in the Authorization header.
        - [in axios you should be put the token in headers]
        - when a user accesses a protected route, you must validate the
            token to ensure it is correct and not expired.

    3. Header Come Like This: Authorization: Bearer <token>
*/


const protect = asyncHandler(async(req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            // Get The Token from Header
            token = req.headers.authorization.split(' ')[1]; // Bearer <token> --> get just the token
            // Verfiy The Token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // Get User from token
            req.user = await userModel,find()
        } catch (error) {
            
        }
    }
});


export {protect};



