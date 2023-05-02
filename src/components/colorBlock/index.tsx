import React, { ReactNode } from 'react';
import './styles.scss';

type ColorBlockProps = {
    children: ReactNode;
};

const ColorBlock = ({ children }: ColorBlockProps) => {
    return <div className="color-block">{children}</div>;
};

export default ColorBlock;
