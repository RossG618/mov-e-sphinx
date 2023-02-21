import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
    domain="dev-zjsv2b3h2q5o5qrw.us.auth0.com"
    clientId="SCHvX2eekP7x5i0ykOSNIgYmNVvK7sj4"
    authorizationParams={{
      redirect_uri: 'https://movi-sphinx.netlify.app/'
    }}
  >

      <App />
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
