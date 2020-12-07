import React, { Component } from 'react';

const componentName = () => <div data-component-trace={'' + ' component-name'}>
    <h1 data-component-trace={'' + ' component-name'}>Hello world</h1>
  </div>;

export default componentName;
