import React from 'react';
import './styles.scss';
import Container from '../../components/container';
import Nav from '../../modules/nav';
import logo from '../../logo.svg';

const Header = () => {
    return (
        <header className="header">
            <Container>
                <div className="header__inner">
                    {/* TODO мб вставить svg */}
                    <img src={logo} className="header__logo" alt="logo" />
                    <Nav />
                </div>
            </Container>
        </header>
    );
};

export default Header;
