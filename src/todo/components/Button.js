import React from 'react';
import PropTypes from 'prop-types';

export default class ButtonTodo extends React.PureComponent {

    render(){
        return (
            <>
                <button
                    type={this.props.type}
                    name={this.props.name}
                    onClick={()=>this.props.click()}
                    className="btn btn-primary"
                >{this.props.children}</button>
            </>
        )
    }
}

ButtonTodo.defaultProps = {
    type: 'button',
    name: 'abcxyz'
}
ButtonTodo.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}