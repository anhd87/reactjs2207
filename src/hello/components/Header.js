import React from 'react';

export default class HeaderComponent extends React.Component {

    render() {
        // rendering element
        return (
            <header>
                <h2>This is header</h2>
                <span>Name : {this.props.name}</span>
            </header>
        )
    }
}