import React, { ReactNode } from 'react';
import './styles.scss';

type ContainerProps = {
    children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
    return <div className="container">{children}</div>;
};

export default Container;
