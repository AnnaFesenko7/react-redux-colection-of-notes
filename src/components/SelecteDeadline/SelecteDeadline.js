import 'flatpickr/dist/themes/material_green.css';
import Flatpickr from 'react-flatpickr';

import * as timerActions from '../../redux/timer/timer-actions';
import { connect } from 'react-redux';
import { useState } from 'react';

const FlatpickrApp = ({ onChangeDeadline }) => {
  const [data, setData] = useState(new Date());
  console.log(data);

  return (
    <Flatpickr
      onClose={selectedDates => {
        onChangeDeadline(
          selectedDates[0].getTime()
        );
      }}
      data-enable-time
      // value={date}
      onChange={([date]) => {
        setData(date);
      }}
    />
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  onChangeDeadline: date =>
    dispatch(timerActions.ChangeDeadline(date)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlatpickrApp);
