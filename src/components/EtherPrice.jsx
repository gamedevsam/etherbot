import React from 'react';
import ResponseBase from './ResponseBase';
import axios from 'axios'

class EtherPrice extends ResponseBase {
  componentWillMount() {
    axios.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,JPY,EUR')
      .then(response => {
        const { USD, EUR, JPY } = response.data;
        this.respond(`1 ETH = $${USD}, €${EUR}, ¥${JPY}`);
    });
  }
}

export default EtherPrice
