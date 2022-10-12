import {
  useState,
  useEffect,
  useRef,
} from 'react';
import s from './Clock.module.css';
import { connect } from 'react-redux';
import FlatpickrApp from 'components/SelecteDeadline/SelecteDeadline';
import Container from 'components/Container/Container';

function Clock({ selectedDate }) {
  const [time, setTime] = useState(() =>
    Date.now()
  );
  // const [seconds, setSeconds] = useState(null);

  const intervalId = useRef(null);
  const deltaTime = selectedDate - time;

  const timeLeft = convertMs(deltaTime);

  useEffect(() => {
    if (intervalId.current === null) {
      intervalId.current = setInterval(() => {
        setTime(Date.now());
      }, 1000);
      return;
    }
    return () => (intervalId.current = null);
  }, []);

  const onStop = () => {
    clearInterval(intervalId.current);
  };

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(
      ((ms % day) % hour) / minute
    );
    //  Remaining seconds
    const seconds = Math.floor(
      (((ms % day) % hour) % minute) / second
    );

    return { days, hours, minutes, seconds };
  }

  return (
    <Container>
      <FlatpickrApp />
      {selectedDate && (
        <>
          <div className={s.container}>
            <p className={s.item}>
              days:{' '}
              <span className={s.value}>
                {timeLeft.days}
              </span>
            </p>
            <p className={s.item}>
              hours:{' '}
              <span className={s.value}>
                {timeLeft.hours}
              </span>
            </p>
            <p className={s.item}>
              minutes:{' '}
              <span className={s.value}>
                {' '}
                {timeLeft.minutes}
              </span>
            </p>
            <p className={s.item}>
              seconds:{' '}
              <span className={s.value}>
                {timeLeft.seconds}
              </span>
            </p>
          </div>
          <button
            className={s.button}
            type="button"
            onClick={onStop}
          >
            Stop
          </button>
        </>
      )}
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    selectedDate: state.timer.selectedDate,
  };
};
export default connect(mapStateToProps)(Clock);

// export default Clock;
