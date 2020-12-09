import styled from 'styled-components';

/* should be transformed */

const basic = styled.div.withConfig({
  displayName: 'actual__basic',
  componentId: 'sc-1t3qr9d-0'
}).attrs({
  'data-styled-component-trace': 'basic'
})(['color:black;']);

const basicCopy = styled(basic).withConfig({
  displayName: 'actual__basicCopy',
  componentId: 'sc-1t3qr9d-1'
}).attrs({
  'data-styled-component-trace': 'basic-copy'
})(['color:blue;']);

const withConfig = styled.div.withConfig({}).withConfig({
  displayName: 'actual__withConfig',
  componentId: 'sc-1t3qr9d-2'
}).attrs({
  'data-styled-component-trace': 'with-config'
})(['color:black;']);

const withAttrs = styled.div.attrs({ 'data-x': 'xyz-123' }).withConfig({
  displayName: 'actual__withAttrs',
  componentId: 'sc-1t3qr9d-3'
}).attrs({
  'data-styled-component-trace': 'with-attrs'
})(['color:black;']);
