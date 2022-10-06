import React from 'react';

export default class ChildComponent extends React.PureComponent {

    componentWillUnmount() {
        console.log('ChildComponent deleted');
        console.log('***************');
    }
    render() {
        return (
            <>
                <button type="button"> button children</button>
            </>
        )
    }
}