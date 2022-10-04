import React from 'react';
import InputTodo from './components/Input';
import ButtonTodo from './components/Button';
import ListTodo from './components/List';
import LayoutTodo from './components/Layout';

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

    removeItem = (id) => {
        // xoa bo cong viec trong state dataLists theo dung id truyen len
        // cap nhat lai state dataLists
        const items = this.state.dataLists.filter(item => item.id !== id);
        if(items !== undefined) {
            this.setState({
                ...this.state,
                dataLists: items
            })
        }
    }

    finishedItem = id => {
        // can cap nhat thuoc tinh "done" nam trong object thuoc state dataLists - phu thuoc vao id truyen len
        // ko duoc phep mat cong viec hay bi them cong viec
        /* 
        [{id: 1,name: 'hoc css',done: false},{id: 2,name: 'hoc html',done: false}]
        */
       const newData = this.state.dataLists.map(item => {
           return item.id === id ? {...item, done: !item.done} : item;
       })
       if(newData !== undefined){
            this.setState({
                ...this.state,
                dataLists: newData
            })
       }
    }

    render(){
        //console.log(this.state.dataLists);
        return (
            <>
                <LayoutTodo>
                    <InputTodo
                        type="text"
                        name="todo"
                        change={this.changeNameWork}
                    />
                    <ButtonTodo
                        name="buttonTodo"
                        click={this.addTodo}
                    > Them cong viec</ButtonTodo>
                    <ListTodo
                        listWorks={this.state.dataLists}
                        remove={this.removeItem}
                        finished={this.finishedItem}
                    />
                </LayoutTodo>
            </>
        )
    }
}