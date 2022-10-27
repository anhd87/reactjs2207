import React from 'react';
import LayoutMovie from '../components/layouts/Layout';
import { Row, Col } from 'antd'

const DetailMovie = () => {
    return (
        <LayoutMovie
            app="Home"
            title="Movie"
            name="black-adam"
        >
            <Row>
                <Col span={24}>
                    <h1> this is detail page</h1>
                </Col>
            </Row>
        </LayoutMovie>
    )
}
export default React.memo(DetailMovie);