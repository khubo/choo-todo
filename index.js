var choo = require('choo');
var html = require('choo/html');
var animalStore = require('./src/stores/animalStore')
var main = require('./src/views/main.js');

var app = choo();
app.use(animalStore)
app.route('/', main);
app.route('/filter/:type', main)

if(!module.parent){
    app.mount('#app');
} else {
    module.exports = app;
}
