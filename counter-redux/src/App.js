import React from 'react'
import { connect } from 'react-redux'

import * as actionTypes from './store/actions'
import './App.css'

const App = props => {
  const { reduxCount, onDecrement, onIncrement } = props
  return (
    <div className="App">
      <button onClick={onIncrement}>+</button>
      <p>{reduxCount}</p>
      <button onClick={onDecrement}>-</button>
    </div>
  )
}

const mapStateToProps = ({ count }) => ({
  reduxCount: count
})

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch({ type: actionTypes.INCREMENT }),
  onDecrement: () => dispatch({ type: actionTypes.DECREMENT })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
