var html = require('choo/html');

module.exports = function(onclick, animal, i) {
    var type = animal.type;
    var x = animal.x;
    var y = animal.y;

    return html`
        <img src="/src/assets/images/${type}.gif"
            id=${i}
            onclick="${onclick}" 
            style="position: absolute; left: ${x}px; top: ${y}px;"
            alt="${type}"/>
    `
}