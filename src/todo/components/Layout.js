import React from 'react';
import PropTypes from 'prop-types';

export default class LayoutTodo extends React.PureComponent {

    render() {
        return (
            <>
                {this.props.children}
            </>
        )
    }
}
LayoutTodo.propTypes = {
    children: PropTypes.node.isRequired
}