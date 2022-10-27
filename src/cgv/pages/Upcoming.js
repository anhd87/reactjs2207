import React from 'react';
import LayoutMovie from '../components/layouts/Layout';
import { Row, Col } from 'antd'

const UpcomingPage = () => {
    return (
        <LayoutMovie
            app="Home"
            title="List"
            name="Upcoming"
        >
            <Row>
                <Col span={24}>
                    <h1> this is upcoming page</h1>
                </Col>
            </Row>
        </LayoutMovie>
    )
}
export default React.memo(UpcomingPage);