const store  = (state, emitter) => {
  state.todos = []


  emitter.on('addTodo', (todo) => {

    state.todos.push(todo)
    emitter.emit('render')
    console.log(state.todos)
  })
}

export default store