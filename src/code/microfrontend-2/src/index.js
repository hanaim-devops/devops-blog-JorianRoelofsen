import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Keycloak from 'keycloak-js';

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
    console.log('Page1')
        root.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
  } else {
      console.log('Page11111')
      window.location.reload();
    }
}).catch((error) => {
    console.error('Failed to initialize Keycloak:', error);
});
