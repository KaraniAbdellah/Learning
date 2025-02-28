const bcrypt = require('bcrypt');

// Authentification && Authorization
/*
    Authentication: proving you are who you say you are 
    Authorization: The permission you have
*/



// Intro To Needed Tools
/*
    JWT (JSON Web Tokens) for handling authentication (storing tokens for user sessions).
    bcrypt.js for hashing passwords before storing them in the database.
    Passport.js (optional) for simplifying authentication strategies.

    Start with bcrypt.js for password hashing, 
    then use JWT for authentication, and optionally 
    add Passport.js for simplifying strategies.
*/


// Bcrypt
/*
    Hashing Algorithms Overview:
        - MD5, SHA-1 → Insecure
        - SHA-2 → Secure (Used in modern cryptography)
        - Blowfish → Basis for Bcrypt (Adaptive hashing for passwords)

    Bcrypt is slat: A salt is a random value added to a password before hashing.
        It makes each hash unique, even if two people use the same password
    
    What is Happen:
        A random salt (e.g., "XyZ@9") is generated.
        The password and salt are combined ("hello123XyZ@9").
        This combined value is hashed using an algorithm like Bcrypt.
*/

const saltRounds = 10;
const plainPassword = 'myPassword13';
// Hashing the password
bcrypt.hash(plainPassword, saltRounds, function(err, hash) {
    if (err) {
        console.error(err);
    } else {
        console.log('Hashed password:', hash);

        // Verifying the password
        bcrypt.compare(plainPassword, hash, function(err, result) {
            if (err) {
                console.error(err);
            } else {
                console.log('Password match:', result);
            }
        });
    }
});



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


