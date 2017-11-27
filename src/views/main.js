import html from 'choo/html';
import animalView from './animal'
import img_background from 'images/bg.gif'

export default function (state, emit) {
    function animalMap(animalObj, i) {
        // params refers to URL params from Router
        var filterToType = state.params.type;
        if (filterToType && filterToType !== animalObj.type) {
            // if we're filtering AND this animal is 
            // not of the type to be filtered - 
            // then do nothing
            return;
        } else {
            return animalView(removeAnimal, animalObj, i);
        }
    }

    function addNewAnimal(e) {
        if (e) {
            emit('addNewAnimal', {
                x: e.offsetX -20,
                y: e.offsetY -10
            });
        }
    }

    function removeAnimal(e){
        var index = e.target.id;
        emit('removeAnimal', index);
    }

    return html `
        <div class="container">
            <div class="grass">
                <img 
                    src="${img_background}"
                    alt="background"
                    onclick=${addNewAnimal}
                />
                ${state.animals.map(animalMap)}
            </div>

            <div class="controls">
                <ul class="filters">
                <li><a href="/">all</a></li>
                <li><a href="#filter/crocodile">crocodiles</a></li>
                <li><a href="#filter/koala">koalas</a></li>
                <li><a href="#filter/lion">lions</a></li>
                <li><a href="#filter/tiger">tigers</a></li>
                <li><a href="#filter/walrus">walruses</a></li>
                </ul>
            </div>
        </div>
    `
}