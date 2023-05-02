import React from 'react';
import './styles.scss';

type CircleProps = {
    modName: string;
};

const Circle = ({ modName }: CircleProps) => {
    let classNames = 'circle';
    if (modName) {
        classNames += ` circle_${modName}`;
    }
    return <div className={classNames}></div>;
};

export default Circle;
