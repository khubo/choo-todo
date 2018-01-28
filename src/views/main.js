import html from 'choo/html'
import inputTodo from './inputTodo'
import showTodos from './showTodo'

export function mainView(state, emit) {
    
    return html`
    <div>
    <h1> Todo </h1>
    <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--4-col"> </div>
        <div class="mdl-cell mdl-cell--4-col">  
            ${inputTodo(addTodo)}
            ${showTodos(state.todos)}
        </div>
        <div class="mdl-cell mdl-cell--4-col"> </div>
    </div>
    </div>
    `

    function addTodo(todo) {
      console.log('here also')
      emit('addTodo', todo)
    }
}