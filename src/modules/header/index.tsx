import React from 'react';
import './styles.scss';
import logo from '../../logo.svg';
import Nav from '../../modules/nav';

const Header = () => {
    return (
        <header className="header">
            {/* TODO мб вставить svg */}
            <img src={logo} className="header__logo" alt="logo" />
            <Nav />
        </header>
    );
};

export default Header;
