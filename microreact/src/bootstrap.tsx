import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import React from 'react';
import './styles.scss';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

class Mfe4Element extends HTMLElement {
  connectedCallback() {
    console.log('http-mfe-react-element connectedCallback from DOM');
    const root = ReactDOM.createRoot(this);
    root.render(
        <StrictMode>
          <App />
        </StrictMode>
    );
  }

  disconnectedCallback() {
    console.log('http-mfe-react-element disconnectedCallback from DOM');
  }
}

customElements.define('http-mfe-react-element', Mfe4Element);