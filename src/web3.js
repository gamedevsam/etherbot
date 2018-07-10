//https://github.com/ethereum/wiki/wiki/JavaScript-API
import Web3 from 'web3';
import axios from 'axios'

var web3
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
}

export default web3
