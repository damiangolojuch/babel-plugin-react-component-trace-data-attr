import React, { Component } from 'react';

function SubComponent() {
  return <div>Sub</div>;
}

const componentName = () => {
  return <div data-component-trace={'' + ' component-name'}>
    <SubCoponent data-component-trace={'' + ' component-name'} />
  </div>;
};

export default componentName;
