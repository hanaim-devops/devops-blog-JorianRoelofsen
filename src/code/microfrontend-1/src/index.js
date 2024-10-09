import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Keycloak from 'keycloak-js';

// Create a new instance of Keycloak using 'new'
const keycloak = new Keycloak({
    url: 'http://localhost:8080',
    realm: 'myrealm',
  clientId: 'myclient',
});

const root = ReactDOM.createRoot(document.getElementById('root'));

keycloak.init({
  onLoad: 'login-required',
  silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
  pkceMethod: 'S256',
  redirectUri: window.location.origin,
}).then((authenticated) => {
    if (authenticated) {
        root.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
    } else {
        window.location.reload();
    }
}).catch((error) => {
    console.error('Failed to initialize Keycloak:', error);
});
