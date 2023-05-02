import React, { ReactNode } from 'react';
import './styles.scss';
import Btn from '../../components/btn';
import Picture from '../../components/picture';

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
                <Picture {...image} classes="banner__picture" />
            </div>
        </div>
    );
};

export default Banner;
