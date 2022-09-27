import React from 'react';
import LayoutComponent from './components/Layout';

import './welcome.css';

const Welcome = () => {
    return (
        <React.Fragment>
            <LayoutComponent>
                <h1 className="title" style={{ color: 'yellow',marginTop:'10px' }}> Hello you</h1>
                <input type="text" className="input"/>
            </LayoutComponent>
        </React.Fragment>
    )
}
export default Welcome;