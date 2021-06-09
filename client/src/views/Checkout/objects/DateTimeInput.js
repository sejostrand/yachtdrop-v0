import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

const DateTimeInput = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <DateTimePicker onChange={onChange} value={value} />
    </div>
  );
};

export default DateTimeInput;
