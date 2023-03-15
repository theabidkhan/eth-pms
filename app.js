var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));
var productContractJson = require("./build/contracts/ProductContract.json");

let contractAddress = "0x372f885e7e2D5D304C641b84F1f82f026d55FBE2";
let accountAddress = "0x4ED4aF7e31b308430998F1f63365f213913331DE";


async function myApp() {

    let productContract = new web3.eth.Contract(productContractJson.abi, contractAddress);

    console.log(`balance : ${await web3.eth.getBalance(accountAddress)}`)

    console.log(`my Name : ${await productContract.methods.myName().call()}`);
    // await productContract.methods.values().call();

    await productContract.methods.addProduct('PROD1001', 'Car', 'Black').send({from: accountAddress,gas: "1000000"});
    console.log(`balance : ${await web3.eth.getBalance(accountAddress)}`);

    let product = await productContract.methods.getProductById('PROD1001').call();
    console.info(product);

    let prodCount = await productContract.methods.getProductCounts().call();
    console.log(`product count : ${prodCount}`);
}

myApp();