var MyContract = artifacts.require("Migrations");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(MyContract);
};