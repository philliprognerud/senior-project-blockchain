const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const paypal = require("paypal-rest-sdk");
var cors = require('cors')

require("./models/User");
require("./authentication/passport");

mongoose.connect(keys.mongoURI);


paypal.configure({
  mode: "sandbox", //sandbox or live
  client_id:
    "AbSMkDyzLXy8IfqJf_ThC_fYCu7Nwo0UZn3QaFoX4vBQRfZr258NcmdFcTq1E9harAoXlpQRZIR4DSZz",
  client_secret:
    "ELQLE66i6HQEYdpk1S9Pz7dnl4PgmoZldTsGv4d8sCG_H_TEFNN1z3EANS2SORjphauEtBetgb6qnMe1"
});



const app = express();
app.use(cors())
app.use(
  session({
    secret: keys.cookieKey,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 }
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

require("./routes/authRoutes")(app);
require("./routes/payments")(app);

app.listen(8081, function() {
  console.log("NODE server listening on port 8081!");
});
