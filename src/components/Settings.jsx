import React from 'react';
import ResponseBase from './ResponseBase';

class Settings extends ResponseBase {
  componentWillMount() {
    setTimeout(() => this.respond('404'), 1000);
  }
}

export default Settings
