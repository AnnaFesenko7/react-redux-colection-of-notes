import axios from 'axios';
import shortid from 'shortid';
import {
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosError,
} from './todos-actions';
axios.defaults.baseURL = 'http://localhost:4040';

// GET @ /tasks
const fetchTodos = () => async dispatch => {
  dispatch(fetchTodosRequest());

  try {
    const { data } = await axios.get('/todos');
    dispatch(fetchTodosSuccess(data));
  } catch (error) {
    dispatch(fetchTodosError(error.message));
  }
};

// POST @ /tasks
const addTodo = text => dispatch => {
  const todo = {
    id: shortid.generate(),
    text,
    completed: false,
  };

  dispatch(addTodoRequest());

  axios
    .post('/todos', todo)
    .then(({ data }) =>
      dispatch(addTodoSuccess(data))
    )
    .catch(error =>
      dispatch(addTodoError(error.message))
    );
};

// DELETE @ /tasks/:id
const deleteTodo = todoId => dispatch => {
  dispatch(deleteTodoRequest());

  axios
    .delete(`/todos/${todoId}`)
    .then(() =>
      dispatch(deleteTodoSuccess(todoId))
    )
    .catch(error =>
      dispatch(deleteTodoError(error.message))
    );
};

// PATCH @ /tasks/:id
const toggleCompleted =
  ({ id, completed }) =>
  dispatch => {
    const update = { completed };

    dispatch(toggleCompletedRequest());

    axios
      .patch(`/todos/${id}`, update)
      .then(({ data }) =>
        dispatch(toggleCompletedSuccess(data))
      )
      .catch(error =>
        dispatch(
          toggleCompletedError(error.message)
        )
      );
  };

const todosOperations = {
  fetchTodos,
  addTodo,
  deleteTodo,
  toggleCompleted,
};
export default todosOperations;
