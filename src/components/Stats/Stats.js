import { connect } from 'react-redux';
import { todosSelectors } from '../../redux/todos';
import { useSelector } from 'react-redux';
import styles from './Stats.module.css';

function Stats() {
  const total = useSelector(
    todosSelectors.getTotalTodoCount
  );
  const completed = useSelector(
    todosSelectors.getCompletedTodoCount
  );

  return (
    <div className={styles.container}>
      <p className={styles.item}>
        <span className={styles.value}>
          {total}
        </span>
        <span className={styles.label}>
          Всего
        </span>
      </p>
      <p className={styles.item}>
        <span className={styles.value}>
          {completed}
        </span>
        <span className={styles.label}>
          Выполнено
        </span>
      </p>
    </div>
  );
}

const mapStateToProps = state => ({
  total: state.todos.items.length,
  completedTodos: state.todos.items.reduce(
    (acc, todo) =>
      todo.completed ? acc + 1 : acc,
    0
  ),
});

export default connect(mapStateToProps)(Stats);
