import { useState, useEffect } from 'react';
import {
    SCREEN_TABLET_SMALL,
    SCREEN_TABLET,
    SCREEN_LAPTOP,
    SCREEN_DESKTOP,
} from '../helpers/breakpoints';

const UseResize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return {
        width,
        isScreenMobileSmall: width < SCREEN_TABLET_SMALL,
        isScreenMobile: width < SCREEN_TABLET_SMALL,
        isScreenTabletSmall: width < SCREEN_TABLET,
        isScreenTablet: width < SCREEN_LAPTOP,
        isScreenLaptop: width < SCREEN_DESKTOP,
        isScreenDesktop: width >= SCREEN_DESKTOP,
    };
};

export default UseResize;
