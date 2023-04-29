import React from 'react';
import './styles.scss';
import Btn from '../../components/btn';

const Nav = () => {
    const navList = [
        {
            link: '/',
            name: 'Главная',
        },
        {
            link: '#',
            name: 'Что даст обучение',
        },
    ];

    return (
        // TODO Добавить бургер
        <nav className="nav">
            <ul className="nav__list">
                {navList.map(({ link, name }) => (
                    <li className="nav__list-item">
                        <a href={link} className="nav__list-link">
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
            {/* TODO Открывать модалку */}
            <Btn text="Личный кабинет" classes="nav__btn" />
        </nav>
    );
};

export default Nav;
