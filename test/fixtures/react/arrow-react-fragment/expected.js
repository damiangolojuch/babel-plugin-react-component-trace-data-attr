import React, { Component } from 'react';

const componentName = () => {
  return <React.Fragment data-component-trace={'' + ' component-name'}>
    <h1 data-component-trace={'' + ' component-name'}>Hello world</h1>
  </React.Fragment>;
};

export default componentName;
