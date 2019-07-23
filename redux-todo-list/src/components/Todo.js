import React from 'react'

const Todo = props => {
  const { completed, text, clicked } = props
  return (
    <li onClick={clicked} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {text}
    </li>
  )
}

export default Todo
