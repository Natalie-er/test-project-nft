import React, { useState, useEffect } from 'react';
import UseResize from '../../hooks/useResize';
import createClass from 'classnames';
import './styles.scss';
import Btn from '../../components/btn';
import Logo from '../../components/logo';

const Nav = () => {
    const navList = [
        {
            id: '0',
            link: '/',
            name: 'Главная',
        },
        {
            id: '1',
            link: '#',
            name: 'Что даст обучение',
        },
    ];

    const { isScreenTablet } = UseResize();

    const [menuOpening, setMenuOpening] = useState(false);
    const toggleMenu = () => {
        setMenuOpening(!menuOpening);
    };

    const navClasses = createClass('nav', menuOpening && 'nav--open');
    const burgerClasses = createClass(
        'nav__burger',
        menuOpening && 'nav__burger--open'
    );

    useEffect(() => {
        if (menuOpening && isScreenTablet) {
            document.body.classList.add('overlay-visible');
        } else {
            document.body.classList.remove('overlay-visible');
        }
    }, [menuOpening, isScreenTablet]);

    return (
        <>
            <button
                type="button"
                className={burgerClasses}
                onClick={toggleMenu}
            ></button>
            <nav className={navClasses}>
                {isScreenTablet && <Logo classes="nav__logo" />}
                <ul className="nav__list">
                    {navList.map(({ id, link, name }) => (
                        <li className="nav__list-item" key={id}>
                            <a href={link} className="nav__list-link">
                                {name}
                            </a>
                        </li>
                    ))}
                </ul>
                {/* TODO Открывать модалку */}
                <Btn text="Личный кабинет" classes="nav__btn" mode="outline" />
            </nav>
        </>
    );
};

export default Nav;
