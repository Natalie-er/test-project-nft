import React, { SyntheticEvent, useState, useRef } from 'react';
import './styles.scss';
import Btn from '../btn';

const apiURL = '/';

type FormProps = {
    successCallback: () => void;
};

const Form = ({ successCallback }: FormProps) => {
    const [email, setEmail] = useState('');
    const formRef = useRef(null);

    const onSuccessSend = () => {
        setEmail('');
        successCallback();
    };

    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        try {
            const response = await fetch(apiURL, {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                }),
            });
            onSuccessSend(); // TODO Вызываю здесь для наглядности
            await response.json();
            if (response.status === 200) {
                onSuccessSend();
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form ref={formRef} onSubmit={onSubmit} className="form">
            <input type="email" placeholder="Ваш email" required />
            <Btn text="Оплатить" classes="modal__btn" type="submit" />
        </form>
    );
};

export default Form;
