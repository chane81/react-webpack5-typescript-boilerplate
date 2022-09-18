import React, { useState } from 'react';
import Master from '../components/Master';
import styled from '@emotion/styled';

/** style - btn wrapper */
const BtnWrapper = styled.div`
  .btn-inc {
    background-color: skyblue;
  }
`;

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
      <BtnWrapper>
        <button id='btnInc' className='btn-inc' onClick={handleInc}>
          숫자증가
        </button>
        <button id='btnMultiInc' onClick={handleIncMulti}>
          한번에 여러번 증가
        </button>
      </BtnWrapper>
    </Master>
  );
};

export default BesttateUpdate;
