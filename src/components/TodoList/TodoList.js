import s from 'components/TodoList/TodoList.module.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import todosOperations from '../../redux/todos/todos-operations';
import { useSelector } from 'react-redux';
import todosSelectors from '../../redux/todos/todos-selectors';

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    const {
      loading,
      todos,
      onDeleteTodo,
      onToggleCompleted,
    } = this.props;
    console.log(todos);
    console.log(loading);
    return (
      <ul className={s.totalList}>
        {todos.map(({ id, text, completed }) => (
          <li
            key={id}
            className={s.totalListItem}
          >
            <input
              type="checkbox"
              className={s.totalList__checkbox}
              checked={completed}
              onChange={() =>
                onToggleCompleted({
                  id,
                  completed: !completed,
                })
              }
            />
            <p className={s.totalList__text}>
              {text}
            </p>
            <button
              type="button"
              className={s.totalList__button}
              onClick={() => onDeleteTodo(id)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
const mapStateToProps = state => ({
  todos: todosSelectors.getVisibleTodos(state),
  loading: state.todos.loading,
});
const mapDispatchToProps = dispatch => ({
  fetchTodos: () =>
    dispatch(todosOperations.fetchTodos()),
  onDeleteTodo: id =>
    dispatch(todosOperations.deleteTodo(id)),
  onToggleCompleted: todoObj =>
    dispatch(
      todosOperations.toggleCompleted(todoObj)
    ),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
