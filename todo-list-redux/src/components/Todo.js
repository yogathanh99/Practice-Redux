import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ clicked, completed, text }) => (
  <li onClick={clicked} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
    {text}
  </li>
)

Todo.propTypes = {
  clicked: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
