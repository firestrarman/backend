import React, { Component } from 'react';

export default class Index extends Component {
    render () {
        const { children } = this.props;
        return (
            <div>
                { children }
            </div>
        );
    }
}
