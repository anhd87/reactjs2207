import React from 'react';
import InputTodo from './components/Input';
import ButtonTodo from './components/Button';
import ListTodo from './components/List';

export default class TodoApp extends React.PureComponent {
    constructor(props) {
        super(props);
        // khai bao state
        this.state = {
            nameWork: '',
            idWork: 1,
            dataLists: []
        };
    }

    changeNameWork = (event) => {
        const work = event.target.value.trim(); // lay ra dc gia tri nguoi dung nhap vao
        if(work.length > 0){
            this.setState({
                ...this.state,
                nameWork: work
            });
        }
    }

    addTodo = () => {
        const myWork = this.state.nameWork;
        // can cap nhat thay doi state idWork va dataLists
        this.setState({
            ...this.state,
            idWork: this.state.idWork + 1,
            dataLists: [...this.state.dataLists,{
                id: this.state.idWork,
                name: myWork,
                done: false
            }]
        })
    }

    render(){
        console.log(this.state.dataLists);
        return (
            <>
                <InputTodo
                    type="text"
                    name="todo"
                    change={this.changeNameWork}
                />
                <ButtonTodo
                    type="button"
                    name="buttonTodo"
                    click={this.addTodo}
                > Them cong viec</ButtonTodo>
                <ListTodo />
            </>
        )
    }
}