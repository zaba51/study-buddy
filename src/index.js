import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from 'views/Root';
import { worker } from 'mocks/browser';

worker
  .start({
    onUnhandledRequest: 'bypass',
  })
  .then( () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      //<React.StrictMode>
        <Root />
      //</React.StrictMode>
    );
});