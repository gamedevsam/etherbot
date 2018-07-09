import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'react-simple-chatbot';
import web3 from '../web3'
import axios from 'axios'

class Price extends Component {
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
    axios.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,JPY,EUR')
      .then(response => {
        const { USD, EUR, JPY } = response.data;
        this.continue(`1 ETH = $${USD}, €${EUR}, ¥${JPY}`);
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

Price.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

Price.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};

export default Price
