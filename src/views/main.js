import html from 'choo/html'
import inputTodo from './inputTodo'
import showTodos from './showTodo'
import switchButton from './switchButton'

export function mainView(state, emit) {
    
    let todos = []
    switch(state.state) {
        case 'active':
            todos= state.todos.filter(todo => !todo.done)
            break;
        case 'complete':
            todos = state.todos.filter(todo => todo.done)
            break;
        default:
            todos = state.todos
    }

    return html`
    <div>
    <h1> Todo </h1>
    <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--2-col"> </div>
        <div class="mdl-cell mdl-cell--8-col">  
            ${inputTodo(addTodo)}
            ${showTodos(todos, toggleTodo)}
            ${switchButton(changeState, state.state)}
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

    function changeState (state) {
        emit('changeState', state)
    }   
}