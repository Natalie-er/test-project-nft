import React, { useState, useEffect, ReactNode } from 'react';
import './styles.scss';
import Btn from '../../components/btn';
import Picture, { type PictureProps } from '../../components/picture';
import Modal from '../modal';

type BannerProps = {
    title: string | ReactNode;
    btnText: string;
    children: ReactNode;
    image: PictureProps;
};

const Banner = ({ title, btnText, children, image }: BannerProps) => {
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (modalOpen) {
            document.body.classList.add('overlay-visible');
        } else {
            document.body.classList.remove('overlay-visible');
        }
    }, [modalOpen]);

    return (
        <div className="banner">
            <div className="banner__inner">
                <h1 className="banner__title fw-400">{title}</h1>
                <Picture {...image} classes="banner__picture" />
                <div className="banner__content">{children}</div>
                <Btn
                    text={btnText}
                    onClickCallback={() => setModalOpen(!modalOpen)}
                />
                {modalOpen && (
                    <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
                )}
            </div>
        </div>
    );
};

export default Banner;
