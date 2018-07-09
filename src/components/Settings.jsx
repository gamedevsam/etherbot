import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'react-simple-chatbot';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      result: ''
    };
  }

  componentWillMount() {
    /*
    const { steps } = this.props;
    const search = steps.search.value;
    const endpoint = encodeURI('https://dbpedia.org');
    const query = encodeURI(`
      select * where {
      ?x rdfs:label "${search}"@en .
      ?x rdfs:comment ?comment .
      FILTER (lang(?comment) = 'en')
      } LIMIT 100
    `);

    const queryUrl = `https://dbpedia.org/sparql/?default-graph-uri=${endpoint}&query=${query}&format=json`;

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', readyStateChange);

    function readyStateChange() {
      if (this.readyState === 4) {
        const data = JSON.parse(this.responseText);
        const bindings = data.results.bindings;
        if (bindings && bindings.length > 0) {
          this.setState({ loading: false, result: bindings[0].comment.value });
        } else {
          this.setState({ loading: false, result: 'Not found.' });
        }
      }
    }

    xhr.open('GET', queryUrl);
    xhr.send();
    */
   setTimeout(() => {
    this.setState({ loading: false, result: 'Done!' });
    this.props.triggerNextStep();
   }, 1000);
  }

  render() {
    const { loading, result } = this.state;

    return (
      <div>
        { loading ? <Loading /> : result }
      </div>
    );
  }
}

Settings.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

Settings.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};

export default Settings
