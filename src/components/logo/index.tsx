import React from 'react';
import './styles.scss';
import logo from '../../logo.svg';
import createClass from 'classnames';

type LogoProps = {
    classes?: string;
};

const Logo = ({ classes }: LogoProps) => {
    const classNames = createClass('logo', classes);

    return (
        <>
            {/* TODO мб вставить svg */}
            <img src={logo} className={classNames} alt="logo" />
        </>
    );
};

export default Logo;
