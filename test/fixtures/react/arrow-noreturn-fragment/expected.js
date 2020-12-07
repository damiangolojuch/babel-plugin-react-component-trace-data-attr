import React, { Component, Fragment } from 'react';

const componentName = () => <Fragment data-component-trace={'' + ' component-name'}>
    <h1 data-component-trace={'' + ' component-name'}>Hello world</h1>
  </Fragment>;

export default componentName;
