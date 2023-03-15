const Web3 = require("web3");
const ganache = require("ganache");

const web3 = new Web3(ganache.provider());

const contract = require('./build/contracts/ProductContract.json');

async function myApp(){

    let token = new web3.eth.Contract(contract.abi, '0x78B7c234cfb2141C9ff44b3Cf674a1b4AA1eBCC3');
    // console.info(token);

    let result = await token.methods.addProduct('PROD1001', 'Pencil', 'Blue').call();
    // console.info(result);

    let product= await token.methods.getProductById('PROD1001').call();
    // console.info(product);
}

myApp();

// let tokenBalance = await token.methods.balanceOf('0x69fc54ad4879f7b446a0ab86db531dd4a006ec99').call();
// ethSwap.methods.buyTokens().send({ value: ethAmount, from: account })