import html from 'choo/html'

export default (addTodo) => {

  return html`
  <div class="columns">
    <div class="mdl-textfield mdl-js-textfield">
      <input class="mdl-textfield__input" type="text" id="todo">
      <label class="mdl-textfield__label" for="sample1">Text...</label>
    </div>
    <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" onclick=${onclick}> 
      <i class="material-icons">add</i>
    </button>
  </div>
  `

  function onclick() {
    let value = document.getElementById('todo').value
    if(value !== "")
    addTodo(value)
  }
}