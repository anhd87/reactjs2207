import React from 'react';
import ButtonComponent from './components/Button';
import Result from './components/Result';
import FormElement from './components/Form';

export default class AppCounter extends React.Component {

    constructor(props){
        super(props);
        this.myClick = this.clickMe.bind(this);
        // khai bao state
        this.state = {
            count: 0
        }
    }
    //stateful component : class (ngay xua)
    // stateless component: function (ngay xua)

    clickButton = (e) => {
        // ham de xu ly su kien
        const nameButton = e.target.name;
        if(nameButton === 'increment'){
            // bam vao nut +
            // thay doi state ban dau: state count
            // chi dung phuong thuc sau de cap nhat state
            // chi dung dc trong class component
            this.setState({
                ...this.state,
                count: this.state.count + 1
            }); // immutable state
            //this.setState({count: this.state.count + 1}); 
            // mutable state
        } else if(nameButton === 'decrement'){
            // bam vao nut  -
            this.setState({
                ...this.state,
                count: this.state.count - 1
            });
        }
    }

    changeInput = (e) => {
        console.log(e.target.value);
    }

    // chooseGender = (event) => {
    //     console.log(event.target.value);
    // }
    chooseGender(event){
        console.log(event.target.value);
    }

    clickMe(){
        alert("Click me");
    }

    render() {
        return (
            <>
                <Result result={this.state.count} />
                <ButtonComponent
                    type="button"
                    name="increment"
                    click={this.clickButton}
                >+</ButtonComponent>
                <ButtonComponent
                    type="button"
                    name="decrement"
                    click={this.clickButton}
                >-</ButtonComponent>
                <input onChange={this.changeInput} />
                <select onChange={this.chooseGender}>
                    <option value="">Gioi tinh</option>
                    <option value="1">Nam</option>
                    <option value="2">Nu</option>
                </select>
                <button
                    type="button"
                    onClick={() => alert('bye bye')}
                > click me</button>
                <FormElement/>
            </>
        )
    }
}