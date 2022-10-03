import React from 'react';

export default class Result extends React.PureComponent {

    render(){
        console.log('Result render');
        return(
            <>
                <h1>{this.props.result}</h1>
            </>
        )
    }
}