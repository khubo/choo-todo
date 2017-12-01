import html from 'choo/html';
import { getAnimalImage } from "../helpers/animalHelper";

export function animalView(onclick, animal, i) {
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