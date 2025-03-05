import passport from "passport";
import GoogleStrategy from "passport-google-oauth2";


passport.use(new GoogleStrategy({
    callbackURL: "http://localhost:5174/auth/google/callback",
    passReqToCallback: true
    },
    function(request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

