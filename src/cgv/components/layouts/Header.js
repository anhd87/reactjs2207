import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Header } = Layout;

const HeaderMovie = () => {
    const {pathname} = useLocation();
    const items = [
        { label: <Link to='/'>Popular</Link>, key: '/' },
        { label: <Link to='/upcoming'>Upcoming</Link>, key: '/upcoming' },
        { label: <Link to='/search'>Search</Link>, key: '/search' },
    ];
    return (
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={pathname}
                items={items}
            />
        </Header>
    )
}
export default React.memo(HeaderMovie);