import React from 'react';
import HeaderComponent from './Header';
import FooterComponent from './Footer';

export default class LayoutComponent extends React.Component {
    // rendering element
    render() {
        const {children} = this.props;
        return (
            <>
                {/* component long nhau */}
                <HeaderComponent name="ReactJS2007"/>
                {children}
                <FooterComponent author="T3H"> copyright 2022</FooterComponent>
            </>
        )
    }
}