import React from 'react';
import ResponseBase from './ResponseBase';

class CreateWallet extends ResponseBase {
  componentWillMount() {
    setTimeout(() => this.respond('404'), 1000);
  }
}

export default CreateWallet
