import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

window.onload = () => {
    document.body.style.setProperty(
        '--scroll-width',
        `${window.innerWidth - document.body.clientWidth}px`
    );
};

document.addEventListener('DOMContentLoaded', () => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );

    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
});
