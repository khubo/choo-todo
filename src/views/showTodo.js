import html from 'choo/html'

export default (todos, toggleTodo) => {

    return html`
      <ul class="align-left demo-list-item mdl-list">
        ${
          todos.map((todo, index) => html`
            <li class="mdl-list__item-primary-content ${todo.done ? "strike" : ""}" onclick=${() => toggleTodo(index)}> 
              ${todo.todo} 
            </li>`)
        }
      </ul>
    `

}