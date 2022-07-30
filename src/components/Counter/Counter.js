import './Counter.css';
import React from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import Controls from './Controls';
import * as actions from '../../redux/counter/counter-actions';
import Container from 'components/Container/Container';

export default function Counter() {
  const value = useSelector(
    state => state.counter.value
  );
  const step = useSelector(
    state => state.counter.step
  );
  const dispatch = useDispatch();
  const onIncrement = () =>
    dispatch(actions.Increment(step));
  const onDecrement = () =>
    dispatch(actions.Decrement(step));

  return (
    <Container>
      <div className="Counter">
        <h1>Counter</h1>
        <span className="Counter__value">
          {value}
        </span>
        <Controls
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          step={step}
        />
      </div>
    </Container>
  );
}
// const mapStateToProps = state => ({
//   value: state.counter.value,
//   step: state.counter.step,
// });

// const mapDispatchToProps = dispatch => ({
//   onIncrement: value => dispatch(actions.Increment(value)),
//   onDecrement: value => dispatch(actions.Decrement(value)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
