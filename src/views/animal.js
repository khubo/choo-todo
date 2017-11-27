import html from 'choo/html';
import img_lion from 'images/lion.gif';
import img_koala from 'images/koala.gif';
import img_crocodile from 'images/crocodile.gif';
import img_tiger from 'images/tiger.gif';
import img_walrus from 'images/walrus.gif';

export default function(onclick, animal, i) {
    if (animal) {
        let animalImage = getAnimalImage(animal.type);

        return html`
            <img src="${animalImage}"
                id=${i}
                onclick="${onclick}" 
                style="position: absolute; left: ${animal.x}px; top: ${animal.y}px;"
                alt="${animal.type}"/>`
    }
}

// remove to animalHelper
function getAnimalImage(animalType) {
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