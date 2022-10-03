import React from 'react';

export default class ButtonContainer extends React.PureComponent {

    render(){
        console.log('component rendered');
        return(
            <button
                type={this.props.type}
                name={this.props.name}
                onClick={(event)=>this.props.click(event)}
            >{this.props.children}</button>
        )
    }
}