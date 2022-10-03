import React from 'react';

export default class InputTodo extends React.PureComponent {
    render() {
        return (
            <>
                <input
                    type={this.props.type}
                    name={this.props.name}
                    onChange={this.props.change}
                    className="form-control"
                />
            </>
        )
    }
}