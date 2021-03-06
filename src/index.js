import React from 'react';
import ReactDOM from 'react-dom';
import "../src/styles/index.css"
import App from './components/App';
import SimpleReactLightbox from 'simple-react-lightbox'

ReactDOM.render(
  <React.StrictMode>
     <SimpleReactLightbox>
    <App />
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById('root')
);