import React from 'react';
import './styles.scss';
import cleateClass from 'classnames';

type BtnProps = {
    text: string;
    classes?: string;
    mode?: 'accent' | 'outline';
    type?: 'button' | 'submit';
    disabled?: boolean;
    onClick?: () => void;
};

const Btn = ({
    text,
    classes,
    mode = 'accent',
    type = 'button',
    disabled = false,
    onClick,
}: BtnProps) => {
    const classList = cleateClass('btn', `btn--${mode}`, classes);

    return (
        <button
            type={type}
            className={classList}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Btn;
