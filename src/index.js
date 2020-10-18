import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './css/bootstrap.min.css'
import './css/jquery.bsPhotoGallery.css'
import './css/style.css'
import './css/index/style.css'
import './css/project/style.css'
import './css/alert/style.css'
import './js/all'
import './js/custom'
import './js/fontawesome-all'
import './js/jquery.bsPhotoGallery'
import './js/jquery.isotope'
import './js/jquery.mixitup.min.js'
import './js/main'

require('bootstrap')
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
