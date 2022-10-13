import React, { useState, useEffect } from 'react';

const Countdown = (props) => {
  const [counter, setCounter] = useState(20);
  const { socket } = props;

  useEffect(() => {
    if (socket) {
      socket.on('timer', (counter) => {
        setCounter(counter);
      });
    }
  }, [socket]);

  return (
    <script>
        alert({counter ? `You have ${counter} seconds left` : 'You dont have any more time'});
    </script>
  );
};

export default Countdown;
