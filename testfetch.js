const { deploy, retrieve } =  require("./blockchain/deploy");
const { int, bytecode } = require("./blockchain/compile");
const hash = require("object-hash");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const Car = require("./models/Car");
const fetch = require("node-fetch");


let vin = "123456";

const pushData = async(v, t, h) => {
	return await deploy(v, t, h);
};

const getData = async(int, addr) => {
	return await retrieve(int, addr);
};

const pushDataToBlockchain = async(v, t, h) => {
	console.log("pushing: ", v, t, h);
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
	    let data = response;
	    let dataHash = hash(response);

	   pushDataToBlockchain(vin, "car", dataHash)
	    .then(addr => {
	    	console.log(addr)
	        Car.findOneAndUpdate(
	            { vin: vin },
	            { "$set": 
	                { records: 
	                    { 
		                    "data": data, 
		                    "blockAddr": addr
	                    }
	                }
	            },
	            { new: true },
	            (err, doc) => {
	                if (err) console.log(err);
	                console.log(doc);
	            })
	    })
	    .catch(err => {
			console.log(err)
			if (err["receipt"]) {
				console.log(err["receipt"]["contractAddress"])
				Car.findOneAndUpdate(
	            { vin: vin },
	            { "$set": 
	                { records: 
	                    { 
		                    "data": data, 
		                    "blockAddr": addr
	                    }
	                }
	            },
	            { new: true },
	            (err, doc) => {
	                if (err) console.log(err);
	                console.log(doc);
	            })
			}
		})
	})
	.catch(err => console.log("Blame Dominic" + err))
}

// Pull car recent data, get hash, store date, data, hash in MongoDB
// Store VIN + hash on BC
const getRecentData = () => {
	let url = "https://crypto-sphere-229522.appspot.com/car/" + vin;
	let data;
	fetch(url)
	.then(response => response.json())
	.then(response => {
		//console.log(response);
		/*console.log(response["Average Miles per Gallon"]);
		console.log(response["Battery"])
		console.log(response["Car Usage"])
		console.log(response["Fuel Consumption"])
		console.log(response["Odometer"]);
		console.log(response["Trips"]);*/
		
		//console.log(JSON.stringify(response));
		//data = JSON.stringify(response["Average Miles per Gallon"]);
		/*console.log(JSON.stringify(response["Average Miles per Gallon"]))
		console.log(JSON.stringify(response["Battery"]))
		console.log(JSON.stringify(response["Car Usage"]))
		console.log(JSON.stringify(response["Fuel Consumption"]))
		console.log(JSON.stringify(response["Odometer"]));
		console.log(JSON.stringify(response["Trips"]));*/
		/*pushData(vin, data)
		.then(addr => {
			// Add to records["blockAddresses"]["avgmpg"]
			console.log(addr)
		})
		.catch(err => console.log(err));*/
		
		
	})
	.catch(err => {
		console.log(err);
	})
	/*pushData(vin, data)
	.then(addr => console.log(addr))
	.catch(err => console.log(err));*/
}

const getHistoryData = () => {
	let url = "https://crypto-sphere-229522.appspot.com/history/" + vin;
	fetch(url)
	.then(response => response.text())
	.then(response => {
		console.log(response);
	})
	.catch(err => {
		console.log(err);
	})
}

let AvgMPG = "0x9d59095aEb8aB0f22294dA2BdA6B120b14d0caF8";

//getRecentData();
//getHistoryData();

/*getData(interface, retrurnAddress).then(data => {
	console.log(data);
})
.catch(err => console.log(err));*/

// x6 for all data
/*getData(interface, AvgMPG).then(data => {
	console.log(data);
})
.catch(err => console.log(err));*/

//https://crypto-sphere-229522.appspot.com/car/123456
//https://crypto-sphere-229522.appspot.com/history/123456
//https://crypto-sphere-229522.appspot.com/component/123456

//getAndStoreCarData(vin);


/*let mongo = mongoose.MongoClient;
mongo.connect(keys.mongoURI, (err, db) => {
	if (err) throw err;

	console.log("Switched to " + db.databaseName + " database");
	db.createCollection("cars", (err, result) => {
		if (err) throw err;
		console.log("Created cars collection");
		db.close();
	})

});*/

mongoose.connect(keys.mongoURI);

getAndStoreCarData(vin);
/*Car.findOneAndUpdate(
	            { vin: vin },
	            { "$set": 
	                { records: 
	                    { 
		                    "data": { yes: "bootstrap sucks" }, 
		                    "blockAddr": "yes"
	                    }
	                }
	            },
	            { new: true },
	            (err, doc) => {
	                if (err) console.log(err);
	                console.log(doc);
	            })*/