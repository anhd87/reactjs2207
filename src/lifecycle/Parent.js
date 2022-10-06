import React from 'react';
import ChildComponent from './Child';

export default class ParentComponent extends React.Component {
    // 1- mounting
    constructor(props){
        super(props);
        // day se la noi khai bao state cho component
        // constructor se chay dau tien trong mounting
        // chi chay duy nhat 1 lan
        this.state = {
            count: 0,
            color: 'blue',
            show: true
        }
        console.log('constructor ParentComponent running - mounting');
        console.log('***********************************');
    }
    static getDerivedStateFromProps(props, state){
        // no se chay sau constructor trong mounting
        // thong thuong se cap nhat lai state thong qua props truyen vao cho component
        // chay truoc render
        // khong phai chi chay duy nhat 1 lan trong mounting - co the chay ca ben updating
        console.log(`Mounting or updating - getDerivedStateFromProps running`);
        console.log('Mounting or updating - getDerivedStateFromProps running props', props);
        console.log('Mounting or updating - getDerivedStateFromProps running state', state);
        console.log('***********************************');
        // khong lam gi ca co the return null
        return null
    }

    shouldComponentUpdate(nextProps, nextState){
        // chi chay o updating
        // ko can goi ra khi ke thua PureComponent
        // quy dinh xem co render lai giao dien ko?
        // tra ve true thi render lai
        // tra ve false thi ko
        console.log('updating - shouldComponentUpdate: nextProps', nextProps);
        console.log('prevState', this.state.count);
        console.log('updating - shouldComponentUpdate: nextState', nextState);
        console.log('********************************')
        return this.state.count !== nextState;
    }

    componentDidMount(){
        // no chi chay duy nhat mot lan trong mounting
        // no la thang chay cuoi cung trong mounting
        // giao dien da duoc render hien thi truoc het roi
        // thong thuong dung se cap nhat lai state lan cuoi trong mounting
        // hay dung de call data tu api backend
        console.log('Mounting - componentDidMount running')
        console.log('***********************************');
    }

    changeCount = () => {
        this.setState(state => {
            return {
                count: state.count + 1,
                color: 'red',
                show: !state.show
            }
        });
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('updating - getSnapshotBeforeUpdate');
        console.log('prevProps:', prevProps);
        console.log('prevState:', prevState);
        console.log('***********************************');
        // return ket qua ve cho componentDidUpdate su dung
        return 'yellow';
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        // chung ta co the thao tac truc voi dom dang html
        //this.setState({color: snapshot});
        document.getElementsByTagName('h1')[0].style.color = snapshot;
    }

    render() {
        // hien thi giao dien
        console.log('Mounting or updating- render running');
        console.log('***********************************');
        // render : chay ca mounting va updating
        return (
            <>
                <h1 style={{ color: this.state.color }}>{this.state.count}</h1>

                {this.state.show && <ChildComponent/>}

                <button
                    type="button"
                    onClick={()=> this.changeCount()}
                > + </button>
            </>
        )
    }
}