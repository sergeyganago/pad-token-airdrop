var SafeMath = artifacts.require("./math/SafeMath.sol");
var ERC20 = artifacts.require("./token/ERC20.sol");
var ERC20Basic = artifacts.require("./token/ERC20Basic.sol");
var BurnableToken = artifacts.require("./token/BurnableToken.sol");
var BasicToken = artifacts.require("./token/BasicToken.sol");
var StandardToken = artifacts.require("./token/StandardToken.sol");
var Ownable = artifacts.require("./ownership/Ownable.sol");
var Pausable = artifacts.require("./lifecycle/Pausable.sol");
var PADToken = artifacts.require("./PADToken.sol");
var PADSale = artifacts.require("./PADSale.sol");


module.exports = function(deployer, network, accounts) {
    //console.log("Accounts: " + accounts);

    deployer.deploy(SafeMath);
    deployer.deploy(Ownable);
    deployer.link(Ownable, Pausable);
    deployer.deploy(Pausable);

    deployer.deploy(BasicToken);
    deployer.link(BasicToken, SafeMath);
    deployer.link(BasicToken, ERC20Basic);

    deployer.deploy(StandardToken);
    deployer.link(StandardToken, BasicToken);

    deployer.deploy(PADToken);
    deployer.link(PADToken, StandardToken);
    deployer.link(PADToken, Ownable);
    deployer.link(PADToken, BurnableToken);
    deployer.link(PADToken, SafeMath);

    var time = new Date().getTime() / 1000;

    var monkey = 1234;

    deployer.deploy(PADToken, accounts[1]).then(function() {
        return deployer.deploy(PADSale, accounts[1], 10, 20, 1, time, 2, 5000, PADToken.address);
    });

};
