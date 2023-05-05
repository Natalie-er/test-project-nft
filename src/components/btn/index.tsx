import React from 'react';
import './styles.scss';
import cleateClass from 'classnames';

type BtnProps = {
    text: string;
    classes?: string;
    mode?: 'accent' | 'outline';
    type?: 'button' | 'submit';
    disabled?: boolean;
    onClickCallback?: () => void;
};

const Btn = ({
    text,
    classes,
    mode = 'accent',
    type = 'button',
    disabled = false,
    onClickCallback,
}: BtnProps) => {
    const classList = cleateClass('btn', `btn--${mode}`, classes);

    return (
        <button
            type={type}
            className={classList}
            disabled={disabled}
            onClick={onClickCallback}
        >
            {text}
        </button>
    );
};

export default Btn;
