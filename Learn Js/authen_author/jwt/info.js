
// JWT
/*
    A JSON Web Token (JWT) is a standard (RFC 7519)

    // Components of Token:
        xxxxx.yyyyy.zzzzz [Encoded Version]
        xxxxx: Consits type of token wich is JWT && algorithme bening such as HMAC SHA256 or RSA.
            We Can Called It Claims: [Public, Registred, Private]
        yyyyy: Additional data.
        zzzzz: The signature is created using a secret key and the token data (header + payload).
            It is created using a secret key and a special math formula.
            Signature Used for check if the token has been changed or not.
            Server Check if The Token Changed Or No using verfiy() function.

    How JWT token works ?
        User Logs In: The client (browser) sends login credentials to the server.
        Server Generates JWT: If credentials are valid, the server creates a JWT containing user data and signs it with a secret key.
        Token Sent to Client: The JWT is sent back to the client and stored (usually in localStorage or a cookie).
        For Others Operation Like For Example Authorozation --> Verify thet Token Valid And Not Expire
*/ 



