import { useState } from 'react';
import { useSelector } from 'react-redux';
import Container from 'components/Container/Container';
import TodoList from 'components/TodoList/TodoList';
import TodoEditor from 'components/TodoEditor/TodoEditor';
import Filter from 'components/TodoFilter/TodoFilter';
import Stats from 'components/Stats/Stats';
import Modal from 'components/Modal/Modal';
import IconButton from 'components/IconButton/IconButton';
import { ReactComponent as AddIcon } from '../../icons/plus.svg';
import todosSelectors from '../../redux/todos/todos-selectors';
// import todosOperations from '../../redux/todos/todos-operations';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

export default function TodosView() {
  // const dispatch = useDispatch();
  const isLoadingTodos = useSelector(
    todosSelectors.getLoading
  );

  const [isModalOpen, setIsModalOpen] =
    useState(false);
  const toggleModal = () =>
    setIsModalOpen(state => !state);

  return (
    <Container>
      <div style={barStyles}>
        <Filter />
        <Stats />
        <IconButton
          onClick={toggleModal}
          aria-label="Добавить todo"
        >
          <AddIcon
            width="40"
            height="40"
            fill="#fff"
          />
        </IconButton>

        {isLoadingTodos && <h1>Загружаем...</h1>}
      </div>

      <TodoList />

      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <TodoEditor onSave={toggleModal} />
        </Modal>
      )}
    </Container>
  );
}
