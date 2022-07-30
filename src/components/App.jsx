// import shortid from 'shortid';
import { Route, Routes } from 'react-router-dom';
import Container from './Container/Container';
import AppBar from './AppBar';
import TodosView from 'components/views/TodosView';
import Clock from './Clock/Clock';
import Counter from 'components/Counter/Counter';

export default function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Routes>
        <Route
          path="/counter"
          element={<Counter />}
        />
        <Route
          path="/countdown"
          element={<Clock />}
        />

        <Route
          path="/todos"
          element={<TodosView />}
        />
      </Routes>
    </Container>
  );
}
