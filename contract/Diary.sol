// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;


contract Diary {
mapping(address => bytes[]) private entries;


function addEntry(bytes calldata encrypted) external {
entries[msg.sender].push(encrypted);
}


function getCount(address user) external view returns (uint) {
return entries[user].length;
}
}
