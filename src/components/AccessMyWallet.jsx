import React from 'react';
import ResponseBase from './ResponseBase';
import { isCancel } from '../utils';
import web3 from '../web3'
import axios from 'axios'

class AccessMyWallet extends ResponseBase {
  componentWillMount() {
    const { wallet } = this.props.steps;

    if(isCancel(wallet.value)) {
      this.respond('Ok');
      return;
    }

    web3.eth.getBalance(wallet.value, null, (error, balance) => {
      if(!error) {
        axios.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,JPY,EUR')
          .then(response => {
            const { USD, EUR, JPY } = response.data;
            const eth = web3.utils.fromWei(balance);
            this.respond(eth + ` ETH = $${eth*USD}, €${eth*EUR}, ¥${eth*JPY}`);
        });
      } else this.respond(error);
    });
  }
}

export default AccessMyWallet
