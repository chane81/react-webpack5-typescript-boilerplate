import * as React from 'react';

function FunctionDefault() {
  // let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
  // console.log(x); // 1
  // console.log(y); // 2
  // console.log(z); // object { a: 3, b: 4 }

  return (
    <div>
      <img src='/images/flower-1.jpg' width='500' />
      <h1>Default Export Function</h1>
    </div>
  );
}

export default FunctionDefault;
