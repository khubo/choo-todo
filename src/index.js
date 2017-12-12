/* global window,navigator */
import choo from 'choo';
import html from 'choo/html';
import {animalStore} from './stores/animalStore'
import {mainView} from './views/main';
import './assets/stylesheets/styles.scss';

var app = choo();
app.use(animalStore)
app.route('/', mainView);
app.route('#filter/:type', mainView)
app.mount('#app');

// https://developers.google.com/web/tools/workbox/get-started/webpack
// see WorkBoxPlugin in webpack.config.js
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}