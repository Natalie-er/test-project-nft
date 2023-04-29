import React from 'react';
import './styles.scss';
import cleateClass from 'classnames';

type BtnProps = {
    text: string;
    classes?: string;
    mode?: 'accent' | 'outline';
    type?: 'button' | 'submit';
    disabled?: boolean;
};

const Btn = ({
    text,
    classes,
    mode = 'outline',
    type = 'button',
    disabled = false,
}: BtnProps) => {
    const classList = cleateClass('btn', `btn--${mode}`, classes);

    return (
        <button type={type} className={classList} disabled={disabled}>
            {text}
        </button>
    );
};

export default Btn;
