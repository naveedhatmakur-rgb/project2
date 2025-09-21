import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    // safer update form
    setCount(c => c + 1);
  };

  return (
    <div className="counter-container">
      <div className="counter-box">
        <h1>Counter: {count}</h1>
        <button className="counter-button" onClick={incrementCounter}>
          Increase Counter
        </button>
      </div>
    </div>
  );
};

export default Counter;