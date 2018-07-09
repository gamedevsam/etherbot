import React from 'react';
import ResponseBase from './ResponseBase';

class About extends ResponseBase {
  componentWillMount() {
    setTimeout(() => this.respond('404'), 1000);
  }
}

export default About
