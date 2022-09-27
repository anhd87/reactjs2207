import React from 'react';

export default class ButtonContainer extends React.Component {

    render(){
        return(
            <button
                type={this.props.type}
                name={this.props.name}
            >{this.props.children}</button>
        )
    }
}