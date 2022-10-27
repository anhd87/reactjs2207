import React from 'react';
import LayoutMovie from '../components/layouts/Layout';
import { Row, Col } from 'antd'

const SearchPage = () => {
    return (
        <LayoutMovie
            app="Home"
            title="Movie"
            name="Search"
        >
            <Row>
                <Col span={24}>
                    <h1> this is search page</h1>
                </Col>
            </Row>
        </LayoutMovie>
    )
}
export default React.memo(SearchPage);