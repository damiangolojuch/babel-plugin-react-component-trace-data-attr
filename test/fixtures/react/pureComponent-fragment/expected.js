import React, { Fragment } from 'react';

class PureComponentName extends React.PureComponent {
    render() {
        return <Fragment data-component-trace={(this.props['data-component-trace'] || '') + ' pure-component-name'}>
            <h1 data-component-trace={(this.props['data-component-trace'] || '') + ' pure-component-name'}>Hello world</h1>
        </Fragment>;
    }
}

export default PureComponentName;
