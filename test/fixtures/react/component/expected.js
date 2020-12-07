import React, { Component } from 'react';

class componentName extends Component {
  render() {
    return <div data-component-trace={(this.props['data-component-trace'] || '') + ' component-name'}>
        <h1 data-component-trace={(this.props['data-component-trace'] || '') + ' component-name'}>Hello world</h1>
      </div>;
  }
}

export default componentName;
