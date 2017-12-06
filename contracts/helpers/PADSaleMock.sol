// LaunchPAD Inc. (launchpad@airmail.cc)

pragma solidity ^0.4.15;

import '../PADSale.sol';

/**
 * The PADSale smart contract is used for selling PADToken
 * tokens (PAD). It does so by converting ETH received into a quantity of
 * tokens that are transferred to the contributor via the ERC20-compatible
 * transferFrom() function.
 */
contract PADSaleMock is PADSale {

    uint public _now;

    function PADSaleMock(
        address ifSuccessfulSendTo,
        uint fundingGoalInEthers,
        uint fundingCapInEthers,
        uint minimumContributionInWei,
        uint start,
        uint durationInMinutes,
        uint ratePADToEther,
        address addressOfTokenUsedAsReward
    ) PADSale(ifSuccessfulSendTo, fundingGoalInEthers, fundingCapInEthers,
                     minimumContributionInWei, start, durationInMinutes, ratePADToEther,
                     addressOfTokenUsedAsReward){ 
        _now = start + 1;
    }

    function currentTime() constant returns (uint) {
        return _now;
    }

    event HitLine(uint key, uint val);
    function changeTime(uint _newTime) onlyOwner external {
        HitLine(123, _newTime);
        _now = _newTime;
    }
}
