import React from 'react'

import AddTodo from './containers/AddTodo'
import DisplayTodos from './containers/DisplayTodos'
import './App.css'

function App() {
  return (
    <div className="App">
      <AddTodo />
      <DisplayTodos />
    </div>
  )
}

export default App
