// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// import "hardhat/console.log";

contract Transactions {
  event Transfer(address sender, address receiver, uint amount, string message, uint256 times, string keyword);

  function publishTransaction(address payable receiver, uint amount, string memory message, string memory keyword) public {
    emit Transfer(msg.sender, receiver, message, block.timestamp, keyword, _);
  }
}