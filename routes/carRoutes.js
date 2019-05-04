const { deploy, retrieve } =  require("../blockchain/deploy");
const { interface, bytecode } = require("../blockchain/compile");
const fetch = require("node-fetch");
const hash = require("object-hash");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const Car = mongoose.model("cars");

const pushDataToBlockchain = async(v, t, h) => {
	return await deploy(v, t, h);
};

const getDataFromBlockchain = async(int, addr) => {
	return await retrieve(int, addr);
}; 

const getAndStoreCarData = (vin) => {
    let url = "https://crypto-sphere-229522.appspot.com/car/" + vin;
	fetch(url)
	.then(response => response.json())
	.then(response => {
	    let date = new Date();
	    let data = response;
	    let dataHash = hash(response);
	    
	    /*Car.findOneAndUpdate(
	            { vin: vin },
	            { "$push": 
	                { records: 
	                    { "date": date, 
	                    "data": data, 
	                    "hash": dataHash, 
	                    "blockAddr": "Blame Dominic"}
	                }
	            }, (err, doc) => {
	                if (err) console.log(err);
	            })*/
	    
	    pushDataToBlockchain(vin, "car", dataHash)
	    .then(addr => {
	        console.log(addr)
	        console.log("it somehow succeeded")
	    })
	    .catch(err => {
	    	console.log(err)
	    	if (err["receipt"])
				console.log(err["receipt"]["contractAddress"])
	    	Car.findOneAndUpdate(
	            { vin: vin },
	            { "$push": 
	                { records: 
	                    { 
		                    "data": data, 
		                    "blockAddr": err["receipt"]["contractAddress"]
	                    }
	                }
	            }, (err, doc) => {
	                if (err) console.log(err);
	            })
	    });
	})
	.catch(err => console.log("Blame Dominic" + err))
}

const getAndStoreHistoryData = (vin) => {
    let url = "https://crypto-sphere-229522.appspot.com/history/" + vin;
	fetch(url)
	.then(response => response.json())
	.then(response => {
	    let date = new Date();
	    let data = response;
	    let dataHash = hash(response);
	    
	    Car.findOneAndUpdate(
	            { vin: vin },
	            { "$push": 
	                { history: 
	                    { "date": date, 
	                    "data": data, 
	                    "hash": dataHash, 
	                    "blockAddr": "Blame Dominic"}
	                }
	            }, (err, doc) => {
	                if (err) console.log(err);
	            })
	})
	.catch(err => console.log("Blame Dominic" + err))
}

const getAndStoreComponentData = (vin) => {
    let url = "https://crypto-sphere-229522.appspot.com/component/" + vin;
	fetch(url)
	.then(response => response.json())
	.then(response => {
	    let date = new Date();
	    let data = response;
	    let dataHash = hash(response);
	    
	    Car.findOneAndUpdate(
	            { vin: vin },
	            { "$push": 
	                { component: 
	                    { "date": date, 
	                    "data": data, 
	                    "hash": dataHash, 
	                    "blockAddr": "Blame Dominic"}
	                }
	            }, (err, doc) => {
	                if (err) console.log(err);
	            })
	})
	.catch(err => console.log("Blame Dominic" + err))
}

let hour = 60 * 60 * 1000;
let vin = "123456";
// Fetch car data every hour
setInterval(getAndStoreCarData(vin), hour);
// setInterval(getAndStoreComponentData(vin), hour);

// Store car history every day
// setInterval(getAndStoreHistoryData(vin), hour * 24);

// module.exports = app => {
// 	app.post("/addcar", (req, res) => {
// 		let vin = req.body.vin;
// 		let newCar = new Car({ vin : vin });
// 		newCar.save((err, car) => {
// 			if (err) return console.error(err);
// 			console.log(car);
// 			res.send({ addedCar: true});
//     	}); 
// 	});
	
//     // Get data hash from Mongo and BC, if === send data from Mongo.
//     app.get("/car", (req, res) => {
//         let vin = req.body.vin;
//         let date = req.body.date;
        
//         Car.findOne({ "vin" : vin, "records.date" : date },
//         	"data",
//         	(err, car) => {
//         		if (err) console.log(err);
//         		else {
//         			console.log(car);
//         			res.send(car);        			
//         		}
//         	}
//         )
//     });
    
//     app.get("/history", (req, res) => {
//         let vin = req.body.vin;

//         Car.findOne({ "vin" : vin },
//         	"history",
//         	(err, car) => {
//         		if (err) console.log(err);
//         		else {
//         			console.log(car);
//         			res.send(car);        			
//         		}
//         	}
//         )
//     });
    
//     app.get("/component", (req, res) => {
//         let vin = req.body.vin;
        
//         Car.findOne({ "vin" : vin },
//         	"component",
//         	(err, car) => {
//         		if (err) console.log(err);
//         		else {
//         			console.log(car);
//         			res.send(car);        			
//         		}
//         	}
//         )
//     });
// }
