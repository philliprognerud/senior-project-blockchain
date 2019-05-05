const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

// ETH Account Mneumonic and Infura API Key
const provider = new HDWalletProvider(
	"dose blast traffic jewel color struggle panda garment crunch athlete carbon kangaroo",
	"https://rinkeby.infura.io/v3/1ad138cbb8f544428fcd4c1e72df7972"
);

const web3 = new Web3(provider);

const deploy = async (vin, type, hash) => {
	let returnAddress = "Yes"
	const accounts = await web3.eth.getAccounts();
	
	// Deploy CarReport Contract with initial VIN and initial Status
	const contract = new web3.eth.Contract(JSON.parse(interface));
	//const result = await new web3.eth.Contract(JSON.parse(interface))
	console.log("deploying");
	const deployed = await contract.deploy({ data: bytecode, arguments: [ vin, type, hash ] })
	console.log("Sending");
	await deployed.send({ gas: "1000000", from: accounts[0] }).then((receipt) => {
		console.log("Contract Addr: " + receipt.contractAddress);
		returnAddress = receipt.contractAddress;
	}) /*, 
		(error, transactionHash) => {
			if (error) console.log(error);
			console.log("Transaction Hash: " + transactionHash)
		}) */
		/*.once('receipt', (receipt) => {
		   console.log("Rec addr: " + receipt.contractAddress) // contains the new contract address
		   
		   console.log("Setting returnAddress");

		   returnAddress = receipt.contractAddress;
		   console.log("Return addr: " + returnAddress);

		})
		.on('error', console.error)*/
		/*.then((receipt) => {
			console.log("SEND HELP")
    		console.log("Rec addr: " + receipt.contractAddress)
    	});*/
	//console.log(result);

	console.log("Returning")
	return returnAddress;
};

// Retrive contract at a given block address using the contract's ABI
const retrieve = async (abi, address) => {
	const result = await new web3.eth.Contract(JSON.parse(abi), address);
	const resultVIN = await result.methods.vin().call();
	const resultType = await result.methods.recordType().call();
	const resultHash = await result.methods.recordHash().call();

	const record = {
		vin: resultVIN,
		type: resultType,
		status: resultHash
	}

	return record;
};

module.exports.deploy = deploy;
module.exports.retrieve = retrieve;