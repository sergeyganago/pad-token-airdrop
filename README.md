# PAD Token Acquisition Contract for Deployment I
 
 ***Everything contained in this repository is in draft form and subject to change at any time and provided for information purposes only.  LaunchPAD does not guarantee the accuracy of the information contained in this repository and the information is provided “as is” with no representations or warranties, express or implied. This code is owned and copyrighted by LaunchPAD and cannot be used by anyone for any purpose.***
 
 This repository contains the draft source code for the PAD Token Acquisition. It is being released so that it may be reviewed by the community and deployed and tested by all on the Ethereum test network.
 
 No information regarding the final terms and timing or properties of the acquisition have been released at this time.

# PAD Token Acquisition

This document gives an overview of the smart contracts used for the PAD token and crowdsales.

# Overview

## PAD Token

The PAD token smart contract `PADToken.sol` is ERC20-compatible and has the following additional characteristics:

1. A fixed supply of pre-minted tokens
2. The ability to burn tokens by a user, removing the tokens from the supply
3. During the token acquisition period, regular users cannot transfer tokens
4. A crowdsale is given an allowance of tokens to be sold on behalf of the token owner

At the completion of the final token acquisition, PAD plans to do the following:

1. Burn all unallocated tokens
2. Enable the ability to transfer tokens for everyone

Once these final two steps are performed, the distribution of tokens is complete.

### Implementation

For `SafeMath`, `Ownable`, `Burnable` and `StandardToken` logic.

* `SafeMath` provides arithmetic functions that throw exceptions when integer overflow occurs
* `Ownable` keeps track of a contract owner and permits the transfer of ownership by the current owner
* `Burnable` provides a burn function that decrements the balance of the burner and the total supply
* `StandardToken` provides an implementation of the ERC20 standard

The token contract includes the following constants:

```javascript
    name             = "PAD Token";
    symbol           = "PAD";
    decimals         = 0;
    INITIAL_SUPPLY   = 100 trillion PAD
    CROWDSALE_SUPPLY = 5 trillion PAD
```

The above constants indicate a total supply of 100 trillion pre-minted tokens. Of those, 5 trillion tokens are set aside as an allowance for crowdsale purposes.

## PAD Crowdsale

The PAD crowdsale smart contract may be used to sell PAD tokens. To begin a crowdsale, the token owner must call the `setCrowdsale()` function of the token contract, passing the address of the crowdsale and the requested allowance of tokens to be sold. Although ownership of the tokens is tied to the blockchain and within the token contract, the crowdsale is given an allowance of tokens from the crowdsale supply and thus is able to transfer tokens to users autonomously.

### Token acquisition

To learn more about the token acquisition, please visit [here](https://lnchpad.com).



Copyright 2017 LaunchPAD Inc. All Rights Reserved.
