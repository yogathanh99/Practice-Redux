import React from 'react'
import Todo from './Todo'

const TodoList = props => {
  const { todos, toggleTodo } = props
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} clicked={() => toggleTodo(todo.id)} />
      ))}
    </ul>
  )
}

export default TodoList
