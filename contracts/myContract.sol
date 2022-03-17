//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract myContract {
    address public owner;

    function foo(address newOwner) external {
        // call -> msg.sender == Ownable
        // delegatecall -> msg.sender == my metamask wallet address
        owner = newOwner;
    }
}