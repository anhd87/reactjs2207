import React from 'react';
import { Layout } from 'antd';
import HeaderMovie from './Header';
import FooterMovie from './Footer';
import BreadcrumbMovie from './Breadcrumb';
import PropTypes from 'prop-types';
import '../../assets/style.css';

const { Content } = Layout;

const LayoutMovie = (props) => {
    return (
        <Layout className="layout">
            <HeaderMovie/>
            <Content
                style={{
                    padding: '0 50px',
                }}
            >
                <BreadcrumbMovie
                    app={props.app}
                    title={props.title}
                    name={props.name}
                />
                <div className="site-layout-content">{props.children}</div>
            </Content>
            <FooterMovie/>
        </Layout>
    )
}
LayoutMovie.propTypes = {
    app: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}
export default React.memo(LayoutMovie);