var Migrations = artifacts.require("./Migrations.sol");
var TokenERC20 = artifacts.require("./TokenERC20.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(TokenERC20, "50000", "Test token", "O5S");

};
