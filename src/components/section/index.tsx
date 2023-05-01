import React, { ReactNode } from 'react';
import createClass from 'classnames';
import './styles.scss';

type SectionMode = 'dark' | 'light' | 'full-height' | 'top';

type SectionProps = {
    children: ReactNode;
    mode?: SectionMode | SectionMode[];
};

const Section = ({ children, mode = 'dark' }: SectionProps) => {
    const getModeClasses = () => {
        if (Array.isArray(mode)) {
            const classes = mode.map((item) => {
                return `section--${item}`;
            });
            return createClass(...classes);
        } else {
            return `section--${mode}`;
        }
    };
    const modeClasses = getModeClasses();
    const classList = createClass('section', modeClasses);
    return <section className={classList}>{children}</section>;
};

export default Section;
