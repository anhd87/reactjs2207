import React from 'react';
import { Breadcrumb } from 'antd';
import PropTypes from 'prop-types';

const BreadcrumbMovie = (props) => {
    return (
        <Breadcrumb
            style={{
            margin: '16px 0',
            }}
        >
            <Breadcrumb.Item>{props.app}</Breadcrumb.Item>
            <Breadcrumb.Item>{props.title}</Breadcrumb.Item>
            <Breadcrumb.Item>{props.name}</Breadcrumb.Item>
        </Breadcrumb>
    )
}
BreadcrumbMovie.propTypes = {
    app: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}
export default React.memo(BreadcrumbMovie);