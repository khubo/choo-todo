import html from 'choo/html'

export default (todos) => {

    return html`
      <ul class="align-left demo-list-item mdl-list">
        ${
          todos.map(todo => html`<li class="mdl-list__item-primary-content"> ${todo} </li>`)
        }
      </ul>
    `

}