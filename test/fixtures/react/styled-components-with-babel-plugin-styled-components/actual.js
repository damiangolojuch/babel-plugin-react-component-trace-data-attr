import styled from 'styled-components'

/* should be transformed */

const basic = styled.div`
  color: black;
`

const basicCopy = styled(basic)`
  color: blue;
`

const withConfig = styled.div.withConfig({})`
  color: black;
`

const withAttrs = styled.div.attrs({ 'data-x': 'xyz-123' })`
  color: black;
`
