import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HealthProvider } from './Context/HealthContext';
import { CoinsProvider } from './Context/CoinsContext';
import { NavProvider } from './Context/NavContext';
import { CartProvider } from './Context/CartContext';
import { UserItemsProvider } from './Context/UserItemsContext'; 
import { UserProvider } from './Context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserProvider>
        <UserItemsProvider>
            <CartProvider>
                <NavProvider>
                    <CoinsProvider>
                        <HealthProvider>
                            <App />
                        </HealthProvider>
                    </CoinsProvider>
                </NavProvider>
            </CartProvider>
        </UserItemsProvider>
    </UserProvider>
);

