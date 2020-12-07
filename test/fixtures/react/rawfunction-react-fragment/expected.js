import React, { Component } from 'react';

function SubComponent() {
  return <React.Fragment>Sub</React.Fragment>;
}

const componentName = () => {
  return <React.Fragment data-component-trace={'' + ' component-name'}>
    <SubCoponent data-component-trace={'' + ' component-name'} />
  </React.Fragment>;
};

export default componentName;
