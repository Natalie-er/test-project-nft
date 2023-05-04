import React from 'react';
import './styles.scss';
import Container from '../../components/container';
import Logo from '../../components/logo';
import Nav from '../../modules/nav';

const Header = () => {
    return (
        <header className="header">
            <Container>
                <div className="header__inner">
                    <Logo />
                    <Nav />
                </div>
            </Container>
        </header>
    );
};

export default Header;
