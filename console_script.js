PADSale.deployed().then(function(instance){q=instance});
PADToken.deployed().then(function(instance){t=instance});
acc = web3.eth.accounts


contract = PADSale.at(PADSale.address);
var event = contract.TokenAddressEvent();
event.watch(function(err, result){ console.log(result.args) });
