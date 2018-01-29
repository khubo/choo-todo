import html from 'choo/html'
import inputTodo from './inputTodo'
import showTodos from './showTodo'

export function mainView(state, emit) {
    
    return html`
    <div>
    <h1> Todo </h1>
    <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--2-col"> </div>
        <div class="mdl-cell mdl-cell--8-col">  
            ${inputTodo(addTodo)}
            ${showTodos(state.todos, toggleTodo)}
        </div>
        <div class="mdl-cell mdl-cell--2-col"> </div>
    </div>
    </div>
    `

    function addTodo(todo) {
      emit('addTodo', todo)
    }

    function toggleTodo(index) {
        emit('toggleTodo', index)
    }
}