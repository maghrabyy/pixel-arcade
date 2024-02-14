import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HealthProvider } from './Context/HealthContext';
import { CoinsProvider } from './Context/CoinsContext';
import { NavProvider } from './Context/NavContext';
import { CartProvider } from './Context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartProvider>
        <NavProvider>
            <CoinsProvider>
                <HealthProvider>
                    <App />
                </HealthProvider>
            </CoinsProvider>
        </NavProvider>
    </CartProvider>
);

