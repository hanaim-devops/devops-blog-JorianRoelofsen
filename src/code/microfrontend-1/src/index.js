import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Keycloak from 'keycloak-js';

// Create a new instance of Keycloak using 'new'
const keycloak = new Keycloak({
    url: 'http://localhost:300/auth',
    realm: 'your-realm',
    clientId: 'your-client-id',
});

const root = ReactDOM.createRoot(document.getElementById('root'));

keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
    if (authenticated) {
        root.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
    } else {
        root.render(
            <React.StrictMode>
                <div>
                    LOGIN REQUIRED
                </div>
            </React.StrictMode>
        );
        // Optionally, you can redirect to the login page or reload after a timeout
        window.location.reload();
    }
}).catch((error) => {
    console.error('Failed to initialize Keycloak:', error);
});
