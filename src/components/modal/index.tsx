import React, { useState } from 'react';
import './styles.scss';
import createClass from 'classnames';
import Form from '../form';

type ModalProps = {
    modalOpen: boolean;
    setModalOpen: (modalOpen: boolean) => void;
};

const Modal = ({ modalOpen, setModalOpen }: ModalProps) => {
    const toggleModalOpening = () => {
        setModalOpen(!modalOpen);
    };
    const [showSuccess, setShowSuccess] = useState(false);
    const successCallback = () => {
        setShowSuccess(true);
        setTimeout(() => {
            setModalOpen(false);
        }, 3000);
    };
    const innerClassNames = createClass(
        'modal__inner',
        showSuccess && 'modal__inner--success'
    );

    return (
        <div className="modal">
            <div className="modal__overflow" onClick={toggleModalOpening}></div>
            <div className={innerClassNames}>
                <button
                    className="modal__close"
                    onClick={toggleModalOpening}
                ></button>
                {showSuccess ? (
                    <h4>Заявка успешно отправлена</h4>
                ) : (
                    <>
                        <div className="modal__head">
                            <div className="modal__title text-h3">
                                Начни прямо сейчас!
                            </div>
                            <div className="modal__text text-h5">
                                Получи все нужные навыки для заработка на NFT
                                всего за 28 дней!
                            </div>
                        </div>
                        <div className="modal__body">
                            <Form successCallback={successCallback} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Modal;
