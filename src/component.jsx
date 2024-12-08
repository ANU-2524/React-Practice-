import React, { useState } from 'react';

function Cmp() {
  let [Name, updateMyName] = useState('');
  let [Namee, DBupdateMyName] = useState(' ');

  const update = () => {
    updateMyName('JavaScript !!!');
  };

  const dbUpdate = () => {
    DBupdateMyName('React !!!');
  };

  return (
    <div>
      <h1>Course : {Name} </h1>
      <button onClick={update}> Click Once </button>

      <h1>Using Library : {Namee} </h1>
      <button onDoubleClick={dbUpdate}> Click Twice </button>
    </div>
  );
}
export default Cmp;
