import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import ResponseBase from './ResponseBase';
import { width } from './EtherBotContainer';

class VideoResponse extends ResponseBase {
  render() {
    return (
      <div>
        <ReactPlayer url={this.props.src} width={width - (width/10)} onReady={() => this.respond()}/>
      </div>
    );
  }
}

VideoResponse.propTypes = {
  src: PropTypes.string,
};

VideoResponse.defaultProps = {
  src: undefined,
};

export default VideoResponse
