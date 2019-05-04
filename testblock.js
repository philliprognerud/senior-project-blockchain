/*const { deploy, retrieve } =  require("./blockchain/deploy");
const { interface, bytecode } = require("./blockchain/compile");*/
const { deploy, retrieve } =  require("./blockchain/deploy2");
const { interface, bytecode } = require("./blockchain/compile2");

// Get block address from other DB
/*let vin = "123456";
let status = "Brakes: Poor, Transmission: Good";
let hash = "BlameDominic";
let returnAddress = "someAddress";*/

// Push data onto blockchain, returns a block address for data retrieval
const pushData = async(v, s) => {
	return await deploy(v, s);
};

const pushDataToBlockchain = async(v, t, h) => {
	console.log("pushing: ", v, t, h);
	return await deploy(v, t, h);
};

// Get data from blockchain using the contract bytecode and a given block address
const getData = async(int, addr) => {
	return await retrieve(int, addr);
}; 

/*pushData("11116363641", "dhfkashfklasdhjfdas")
.then(addr => console.log(addr))
.catch(err => {
	console.log(err)
	if (err["receipt"])
		console.log(err["receipt"]["contractAddress"])
})*/

/*pushDataToBlockchain("12345","car","e0a4462c072cb5d02a1eb4fbd201e8e86fd27cd4").then(addr => {
	console.log(addr);
})
.catch(err => console.log(err))*/

//let returnAddress = "0x6E907F4Fd786eE9e5bD5521548Ec977622a863cF"
let returnAddress = "0x5Eb84B471646a260b28D430b0e76F48ff403e048";
// Get Car Data from blockchain. Returns VIN and Status
getData(interface, returnAddress).then(data => {
	console.log(data);
})
.catch(err => console.log(err));