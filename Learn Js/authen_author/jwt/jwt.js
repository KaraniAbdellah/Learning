
// JWT
/*
    A JSON Web Token (JWT) is a standard (RFC 7519)

    // Components of Token:
        xxxxx.yyyyy.zzzzz
        xxxxx: consits type of token wich is JWT && algorithme bening such as HMAC SHA256 or RSA.
        yyyyy: which contains the claims, claims are Claims are statements about an entity (typically, the user) and additional data.
        zzzzz: Signature

    How JWT token works ?
        User Logs In: The client (browser) sends login credentials to the server.
        Server Generates JWT: If credentials are valid, the server creates a JWT containing user data and signs it with a secret key.
        Token Sent to Client: The JWT is sent back to the client and stored (usually in localStorage or a cookie).
        Client Sends Token in Requests: For protected routes, the client includes the JWT in the Authorization header (Bearer Token).
        Server Verifies and Responds: The server verifies the token, extracts user info, and processes the request if valid.
    
    This Token Will Store in Cookies for Second Time
*/ 
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const secretKey = crypto.randomBytes(32).toString('hex');

const token = jwt.sign({
    username: "abdellah",
    id: 1,
}, secretKey, { expiresIn: '1h' });

console.log("Token: " + token);


