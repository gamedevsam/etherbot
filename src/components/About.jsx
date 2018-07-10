import React from 'react';
import ResponseBase from './ResponseBase';

class About extends ResponseBase {
  componentWillMount() {
    this.respond();
  }

  render() {
    return (
      <div>
        I was created by <a target='_blank' href='https://keybase.io/sambatista'>Samuel Batista</a>.<br/><br/>
        My <a target='_blank'  href='https://github.com/gamedevsam/etherbot'>source code</a> is open and free, but hasn't been analysed for defects yet.<br/><br/>
        That's why I'm only compatible with Rinkeby test network for now.<br/><br/>
        I'm only a toy for now, but my dream is to become a great tool someday!
      </div>
    );
  }
}

export default About
