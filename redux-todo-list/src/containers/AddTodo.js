import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../store/actions'

const AddTodo = ({ dispatch }) => {
  const inputRef = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    if (!inputRef.current.value.trim()) return

    dispatch(addTodo(inputRef.current.value))
    inputRef.current.value = ''
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Add</button>
      </form>
    </React.Fragment>
  )
}

export default connect()(AddTodo)
