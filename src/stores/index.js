const store  = (state, emitter) => {
  state.todos = []

  emitter.on('addTodo', (todo) => {

    state.todos.push({
      done: false,
      todo
    })
    emitter.emit('render')
  })

  emitter.on('toggleTodo',(index) => {
    state.todos[index].done = !state.todos[index].done
    emitter.emit('render')
  })

}

export default store