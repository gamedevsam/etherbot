import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'react-simple-chatbot';

class ResponseBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      response: ''
    };
  }

  respond(response) {
    this.setState({ loading: false, response: response });
    this.props.triggerNextStep();
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

ResponseBase.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

ResponseBase.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};

export default ResponseBase
