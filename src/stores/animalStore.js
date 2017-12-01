import {getRandomAnimal} from "../helpers/animalHelper";

export function animalStore(state, emitter) {
    state.animals = [
        {
            type: 'lion',
            x: 200,
            y: 100
        }, {
            type: 'crocodile',
            x: 50,
            y: 300
        }
    ];

    emitter.on('addNewAnimal', function (animal) {
        animal.type = getRandomAnimal();
        state.animals.push(animal);
        emitter.emit('render');
    });

    emitter.on('removeAnimal', function (i) {
        state.animals.splice(i, 1);
        emitter.emit('render');
    });
}