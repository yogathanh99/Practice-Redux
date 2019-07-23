import { toggleTodo } from '../store/actions'
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
