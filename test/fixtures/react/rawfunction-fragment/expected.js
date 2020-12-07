import React, { Component, Fragment } from 'react';

function SubComponent() {
  return <Fragment>Sub</Fragment>;
}

const componentName = () => {
  return <Fragment data-component-trace={'' + ' component-name'}>
    <SubCoponent data-component-trace={'' + ' component-name'} />
  </Fragment>;
};

export default componentName;
