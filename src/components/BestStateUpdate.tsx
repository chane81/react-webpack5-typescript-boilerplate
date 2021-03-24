import React, { useState } from 'react';
import Master from './Master';

const BesttateUpdate = () => {
  const [incState, setIncState] = useState(0);

  const handleInc = () => setIncState((prevState) => prevState + 1);

  const handleIncMulti = () => {
    handleInc();
    handleInc();
    handleInc();
  };

  return (
    <Master>
      <div>incState: {incState}</div>
      <div>
        <button onClick={handleInc}>숫자증가</button>
        <button onClick={handleIncMulti}>한번에 여러번 증가</button>
      </div>
    </Master>
  );
};

export default BesttateUpdate;
