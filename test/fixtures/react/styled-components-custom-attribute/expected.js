import React, { Component } from 'react';
import styled from 'styled-components';

/* should be transformed */

const basic = styled.div.attrs({
  'styled': 'basic'
})`
  color: black;
`;

const withChain = styled.div.attrs({
  'styled': 'with-chain'
}).withConfig()`
  color: black;
`;

const withInterpolation = styled.div.attrs({
  'styled': 'with-interpolation'
})`
  color: ${Colors.black};
`;

const el = styled(El).attrs({
  'styled': 'el'
})`
  color: black;
`;

const arrowExpr = () => styled.div.attrs({
  'styled': 'arrow-expr'
})`
  color: black;
`;

// covered by VariableDeclaraion cases
export const exported = styled.div.attrs({
  'styled': 'exported'
})`
  color: black;
`;

export default styled.div.attrs({
  'styled': 'actual'
})`
  color: black;
`;

/* should not be transformed */

let assigned;
assigned = styled.div`
  color: black;
`;

const arrowReturn = () => {
  return styled.div`
    color: black;
  `;
};

function fnReturn() {
  return styled.div`
    color: black;
  `;
}

const fnExprReturn = function () {
  return styled.div`
    color: black;
  `;
};

const namedFnExprReturn = function namedFnExpr() {
  return styled.div`
    color: black;
  `;
};

const ternary = cond ? styled.div`color: black;` : null;

const conditional = cond && styled.div`color: black;`;

const map = {
  comp: styled.div`color: black;`
};

const comps = [styled.div`color: black;`];

const withConfig = styled.div.attrs({
  'styled': 'with-config'
}).withConfig({})`
  color: black;
`;

const withAttrs = styled.div.attrs({
  'styled': 'with-attrs'
}).attrs({ 'data-x': 'xyz-123' })`
  color: black;
`;