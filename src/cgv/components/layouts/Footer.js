import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterMovie = () => {
    return (
        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            Movies ©2002 Created by T3H-ReactJS2007
        </Footer>
    )
}
export default React.memo(FooterMovie);