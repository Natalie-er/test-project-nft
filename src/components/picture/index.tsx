import React from 'react';
import './styles.scss';

export type PictureProps = {
    src: string;
    src2x: string;
    alt?: string;
    classes?: string;
};

const Picture = ({ src, src2x, alt, classes }: PictureProps) => {
    return (
        <picture className={`picture ${classes}`}>
            <source srcSet={`${src}, ${src2x} 2x`} />
            <img className="picture__image" src={src} alt={alt} />
        </picture>
    );
};

export default Picture;
