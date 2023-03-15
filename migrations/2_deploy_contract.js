const ProductContract = artifacts.require("ProductContract");

module.exports = async  function (deployer) {
  //token contract deploy
  await deployer.deploy(ProductContract);
  const productContract=await ProductContract.deployed();

  //Ethswap contract deploy
  // await deployer.deploy(EthSwap,token.address);
  // const ethSwap=await EthSwap.deployed();

  // await token.transfer(ethSwap.address,"1000000000000000000000000")
};