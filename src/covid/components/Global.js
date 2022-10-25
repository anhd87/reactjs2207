import React from 'react';
import { Row, Col, Card } from 'antd';

const GlobalComponent = () => {
    return(
        <>
            <Row style={{ margin: '20px 0px' }}>
                <Col span={8}>
                    <Card
                        title="Nhiem benh"
                        bordered={true}
                    >
                        <p>Moi nhiem: 1223242</p>
                        <p>Tong ca nhiem: 115</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        title="Tu vong"
                        bordered={true}
                    >
                        <p>Moi tu vong: 110</p>
                        <p>Tong ca tu vong: 911</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        title="Khoi benh"
                        bordered={true}
                    >
                        <p>Moi khoi benh: 333</p>
                        <p>Tong ca khoi benh: 555</p>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default React.memo(GlobalComponent);