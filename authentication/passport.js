const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");
const request = require("request-promise");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

//Local Authentication
passport.use(
  new LocalStrategy(async function(username, password, done) {
    console.log(username, password)
    await User.findOne(
      { "localAuth.email": username, "localAuth.password": password },
      (err, user) => {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false);
        }

        return done(null, user);
      }
    );
  })
);

//Google Authentication
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleID,
      clientSecret: keys.googleSecret,
      callbackURL:"http://localhost:8081/auth/google/callback"
    },
    async function(accessToken, refreshToken, profile, done) {
      const existingUser = await User.findOne({
        "googleAuth.id": profile.id
      });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({
        googleAuth: {
          id: profile.id,
          name: profile.displayName
        }
      }).save();

      return done(null, user);
    }
  )
);
