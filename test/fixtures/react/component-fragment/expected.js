import React, { Component, Fragment } from 'react';

class componentName extends Component {
  render() {
    return <Fragment data-component-trace={(this.props['data-component-trace'] || '') + ' component-name'}>A</Fragment>;
  }
}

export default componentName;
