//module.exports = animalStore;

var animalTypes = ['crocodile', 'koala', 'lion', 'tiger', 'walrus']
function getRandomAnimal ( ) {
    var randomType = (Math.floor(Math.random() * 5))
    return animalTypes[randomType];
}

export default function (state, emitter) {
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

    emitter.on('removeAnimal', function(i){
        state.animals.splice(i, 1);
        emitter.emit('render');
    });
}