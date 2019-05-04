const passport = require("passport");
const middleware = require("../middleware");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");
const paypal = require("paypal-rest-sdk");

module.exports = app => {
  app.post("/auth/login", async function(req, res, next) {
    passport.authenticate("local", async function(err, user, info) {
      if (err) {
        return next(err);
      }

      if (!user) {
        res.send({ success: false, message: "authentication failed" });
      } else {
        req.login(user, err => {
          if (err) {
            next(err);
          }
        });
        res.send({ success: true, message: "authentication succeeded" });
      }
    })(req, res, next);
  });

  app.get("/auth/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/auth/loggedin", middleware.isLoggedIn, function(req, res) {
    res.status(200).send({loggedin: true});
  });

  app.post(
    "/auth/signup",
    middleware.usernameAvail,
    middleware.emailAvail,
    async function(req, res, next) {
      console.log(req.body);

      if (req.usernameTaken || req.emailTaken) {
        res.send({
          usernameTaken: req.usernameTaken,
          emailTaken: req.emailTaken,
          accountCreated: false
        });

        return next();
      }

      console.log("before creating account")

      const newUser = await middleware.createAccount(
        req.body.username,
        req.body.password,
        req.body.email,
        req.body.zipCode
      );

      console.log("here I am")

      res.send({ accountCreated: true });

      req.login(newUser, err => {
        if (err) {
          return next(err);
        }
      });
    }
  );

  // app.get("/auth/facebook", passport.authenticate("facebook"));
  //
  // app.get(
  //   "/auth/facebook/callback",
  //   passport.authenticate("facebook", { failureRedirect: "/" }),
  //   function(req, res) {
  //     res.redirect("/");
  //   }
  // );
  //
  // app.get(
  //   "/auth/google",
  //   passport.authenticate("google", { scope: ["profile"] })
  // );
  //
  // app.get(
  //   "/auth/google/callback",
  //   passport.authenticate("google", { failureRedirect: "/" }),
  //   function(req, res) {
  //     res.redirect("/");
  //   }
  // );

};
