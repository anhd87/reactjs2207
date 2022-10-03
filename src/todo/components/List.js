import React from 'react';

export default class ListTodo extends React.PureComponent {

    render() {
        return (
            <>
                <ul className="form-list">
                    <li> Hoc HTML</li>
                    <li> Hoc CSS</li>
                    <li> Hoc JS</li>
                </ul>
            </>
        )
    }
}