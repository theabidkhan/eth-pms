const ProductContract = artifacts.require("ProductContract");

module.exports = async  function (deployer) {
  await deployer.deploy(ProductContract);
  const productContract=await ProductContract.deployed();
};
