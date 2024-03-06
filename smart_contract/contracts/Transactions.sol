// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

contract Transactions {
  event Transfer(address sender, address receiver, uint amount, string message, uint256 timestamp, string keyword);

  function publishTransaction(address payable receiver, uint amount, string memory message, string memory keyword) public {
    emit Transfer(tx.origin, receiver, amount, message, block.timestamp, keyword);
  }
}