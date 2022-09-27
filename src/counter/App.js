import React from 'react';
import ButtonComponent from './components/Button';
import Result from './components/Result';

export default class AppCounter extends React.Component {

    render() {
        return (
            <>
                <Result result={0} />
                <ButtonComponent
                    type="button"
                    name="increment"
                >+</ButtonComponent>
                <ButtonComponent
                    type="button"
                    name="decrement"
                >-</ButtonComponent>
            </>
        )
    }
}