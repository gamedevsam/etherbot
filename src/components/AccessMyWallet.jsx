import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'react-simple-chatbot';
import { isCancel } from '../utils';
import web3 from '../web3'
import axios from 'axios'

class AccessMyWallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      response: ''
    };
  }

  continue(response) {
    this.setState({ loading: false, response: response });
    this.props.triggerNextStep();
  }

  componentWillMount() {
    const { wallet } = this.props.steps;

    if(isCancel(wallet.value)) {
      this.continue('Ok');
      return;
    }

    web3.eth.getBalance(wallet.value, null, (error, balance) => {
      if(!error) {
        axios.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,JPY,EUR')
          .then(response => {
            const { USD, EUR, JPY } = response.data;
            const eth = web3.utils.fromWei(balance);
            this.continue(eth + ` ETH = $${eth*USD}, €${eth*EUR}, ¥${eth*JPY}`);
        });
      } else this.continue(error);
    });
  }

  render() {
    const { loading, response } = this.state;
    return (
      <div>
        { loading ? <Loading /> : response }
      </div>
    );
  }
}

AccessMyWallet.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

AccessMyWallet.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};

export default AccessMyWallet
