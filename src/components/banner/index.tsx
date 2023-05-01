import React, { ReactNode } from 'react';
import './styles.scss';
import Btn from '../../components/btn';

type BannerImage = {
    src: string;
    src2x: string;
    alt?: string;
};

type BannerProps = {
    title: string | ReactNode;
    btnText: string;
    children: ReactNode;
    image: BannerImage;
};

const Banner = ({ title, btnText, children, image }: BannerProps) => {
    return (
        <div className="banner">
            <div className="banner__inner">
                <div className="banner__text">
                    <h1 className="fw-400">{title}</h1>
                    <div className="banner__content">{children}</div>
                    <Btn text={btnText} />
                </div>
                <picture className="banner__picture">
                    <source srcSet={`${image.src}, ${image.src2x} 2x`} />
                    <img src={image.src} alt={image.alt} />
                </picture>
            </div>
        </div>
    );
};

export default Banner;
