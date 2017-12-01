import choo from 'choo';
import html from 'choo/html';
import { animalStore } from './stores/animalStore'
import { mainView } from './views/main';
import './assets/stylesheets/styles.scss';

var app = choo();
app.use(animalStore)
app.route('/', mainView);
app.route('#filter/:type', mainView)
app.mount('#app');