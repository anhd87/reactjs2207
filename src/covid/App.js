import React from 'react';
import GlobalComponent from './components/Global';
import { Row, Col } from 'antd';
import { api } from './services/api';

export default class AppCovid extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            dataVirus: {}
        }
    }
    // async componentDidMount(){
    //     // call api o day -  cap nhat state o day
    // }
    render() {
        return(
            <Row>
                <Col span={20} offset={2}>
                    <GlobalComponent/>
                </Col>
            </Row>
        )
    }
}