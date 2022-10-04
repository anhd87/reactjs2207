import React from 'react';
import PropTypes from 'prop-types';

export default class ListTodo extends React.PureComponent {

    render() {
        return (
            <>
                <ul className="form-list">
                    {this.props.listWorks.map((item,index) => (
                        <li key={index}>
                            <span>
                                <input
                                    defaultChecked={item.done}
                                    type="checkbox"
                                    onChange={()=>this.props.finished(item.id)}
                                />
                            </span>
                            <span style={item.done ? {color: 'red',textDecoration: 'line-through'} : {}}> {item.name} </span>
                            <span
                                style={{ cursor: 'pointer' }}
                                onClick={()=> this.props.remove(item.id)}
                            > [x] </span>
                        </li>
                    ) )}
                </ul>
            </>
        )
    }
}

ListTodo.propTypes = {
    listWorks: PropTypes.array.isRequired,
    remove: PropTypes.func.isRequired,
    finished: PropTypes.func.isRequired
}