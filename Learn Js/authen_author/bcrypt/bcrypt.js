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



