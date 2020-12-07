import React from 'react';

class PureComponentName extends React.PureComponent {
    render() {
        return <div data-component-trace={(this.props['data-component-trace'] || '') + ' pure-component-name'}>
            <h1 data-component-trace={(this.props['data-component-trace'] || '') + ' pure-component-name'}>Hello world</h1>
        </div>;
    }
}

export default PureComponentName;
