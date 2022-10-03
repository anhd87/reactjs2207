import React from 'react';

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