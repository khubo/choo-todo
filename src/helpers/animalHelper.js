import img_lion from 'images/lion.gif';
import img_koala from 'images/koala.gif';
import img_crocodile from 'images/crocodile.gif';
import img_tiger from 'images/tiger.gif';
import img_walrus from 'images/walrus.gif';

var animalTypes = ['crocodile', 'koala', 'lion', 'tiger', 'walrus'];

export function getAnimalImage(animalType) {
    let animalImage = null;

    switch (animalType) {
        case 'lion':
            animalImage = img_lion;
            break;
        case 'koala':
            animalImage = img_koala;
            break;
        case 'crocodile':
            animalImage = img_crocodile;
            break;
        case 'tiger':
            animalImage = img_tiger;
            break;
        case 'walrus':
            animalImage = img_walrus;
            break;
        default:
            break;
    }

    return animalImage;
}

export function getRandomAnimal ( ) {
    var randomType = (Math.floor(Math.random() * 5))
    return animalTypes[randomType];
}