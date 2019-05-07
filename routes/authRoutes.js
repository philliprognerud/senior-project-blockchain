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
    res.status(200).send({loggedout: true});
  });

  app.get("/auth/loggedin", middleware.isLoggedIn, function(req, res) {
    res.status(200).send({loggedin: true});
  });

  app.post(
    "/auth/signup",
    middleware.emailAvail,
    async function(req, res, next) {
      if (req.emailTaken) {
        res.send({
          emailTaken: req.emailTaken,
          accountCreated: false
        });

        return next();
      }

      const newUser = await middleware.createAccount(
        req.body.name,
        req.body.email,
        req.body.password
      );

      res.send({ accountCreated: true });

      req.login(newUser, err => {
        if (err) {
          return next(err);
        }
      });
    }
  );

  app.get('/auth/google', passport.authenticate('google', {
      scope: [
          'https://www.googleapis.com/auth/userinfo.profile',
          'https://www.googleapis.com/auth/userinfo.email'
      ]
  }));

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    function(req, res) {

      res.redirect("http://localhost:3000/dashboard/order/success");
    }
  );

};
