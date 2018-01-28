/* global window,navigator */
import choo from 'choo';
import html from 'choo/html';
import store from './stores/index'
import {mainView} from './views/main';
import './assets/stylesheets/styles.scss';

var app = choo();
app.use(store)
app.route('/', mainView);
app.route('#filter/:type', mainView)
app.mount('#app');
