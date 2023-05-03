import React from 'react';
import './styles.scss';
import Picture, { type PictureProps } from '../../components/picture';

type Advantage = {
    text: string;
    image: PictureProps;
};

type AdvantagesProps = {
    list: Advantage[];
};

const Advantages = ({ list }: AdvantagesProps) => {
    return (
        <ul className="advantages">
            {list.map(({ text, image }) => (
                <li className="advantages__item">
                    <div className="advantages__item-inner">
                        <Picture {...image} classes="advantages__image" />
                        <p>{text}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Advantages;
