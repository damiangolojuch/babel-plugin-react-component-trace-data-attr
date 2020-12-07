import React, { Component } from 'react';

class componentName extends Component {
  render() {
    return <React.Fragment data-component-trace={(this.props['data-component-trace'] || '') + ' component-name'}>A</React.Fragment>;
  }
}

export default componentName;
