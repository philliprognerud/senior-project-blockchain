const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const paypal = require("paypal-rest-sdk");

module.exports = app => {
  app.post("/auth/checkout", function(req, res) {
    var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:8081/auth/success",
            "cancel_url": "http://cancel.url"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "item",
                    "sku": "item",
                    "price": "29.95",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "29.95"
            },
            "description": "Blockchain Car ID & Analytics"
        }]
    };

    //Create paypal object and get approval URL
    paypal.payment.create(create_payment_json, function(error, payment) {
      if (error) {
        throw error;
      } else {
        let link = payment.links.find(link => {
          return link.rel === "approval_url";
        });

        res.send(link.href);
      }
    });
  });

  app.get("/auth/success", function(req, res) {
    res.redirect("http://localhost:3000/dashboard/order/success");
    // const payerId = req.query.PayerID;
    // const paymentId = req.query.paymentId;
    // const totalAmount = app.get("totalAmount");
    // const hotelId = app.get("hotelId");
    //
    // const startDate = app.get("startDate");
    // const endDate = app.get("endDate");
    // const nights = app.get("nights");
    //
    // const freeNights = app.get("freeNights");
    //
    // const execute_payment_json = {
    //   payer_id: payerId,
    //   transactions: [
    //     {
    //       amount: {
    //         currency: "USD",
    //         total: totalAmount
    //       }
    //     }
    //   ]
    // };
    //
    // paypal.payment.execute(paymentId, execute_payment_json, function(
    //   error,
    //   payment
    // ) {
    //   if (error) {
    //     console.log(error.response);
    //     throw error;
    //   } else {
    //     if (req.user) {
    //       User.findOneAndUpdate(
    //         { _id: req.user._id },
    //         {
    //           $push: {
    //             bookings: {
    //               hotel: hotelId,
    //               startDate: startDate,
    //               endDate: endDate,
    //               nights: nights,
    //               points: nights * 1000,
    //               paymentDetails: payment.transactions[0].item_list.items
    //             }
    //           }
    //         },
    //         { upsert: true, new: true }
    //       ).exec(function(err, doc) {
    //         if (err) {
    //           console.log(err);
    //         } else {
    //           if (freeNights) {
    //             doc.points = doc.points - freeNights * 10000;
    //           }
    //
    //           if (doc.points) {
    //             let newPoint = Math.floor(doc.points + nights * 1000);
    //             doc.points = newPoint;
    //           } else {
    //             let newPoint = Math.floor(nights * 1000);
    //             doc.points = newPoint;
    //           }
    //           doc.save();
    //           res.redirect("/YourBookingsPage");
    //         }
    //       });
    //     }
    //   }
    // });
  });
};
