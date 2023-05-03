import React, { ReactNode } from 'react';
import './styles.scss';
import Btn from '../../components/btn';
import Picture, { type PictureProps } from '../../components/picture';

type BannerProps = {
    title: string | ReactNode;
    btnText: string;
    children: ReactNode;
    image: PictureProps;
};

const Banner = ({ title, btnText, children, image }: BannerProps) => {
    return (
        <div className="banner">
            <div className="banner__inner">
                <h1 className="banner__title fw-400">{title}</h1>
                <Picture {...image} classes="banner__picture" />
                <div className="banner__content">{children}</div>
                {/* TODO form */}
                <Btn text={btnText} />
            </div>
        </div>
    );
};

export default Banner;
