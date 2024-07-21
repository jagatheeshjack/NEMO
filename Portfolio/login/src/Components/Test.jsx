import React, { useReducer } from 'react';

const forceUpdateReducer = (state) => (state + 1);

const Test = () => {
  const [_, forceUpdate] = useReducer(forceUpdateReducer, 0);

  return (
    <div>
      <button onClick={forceUpdate}>Force Update</button>
      {/* Your component content */}
    </div>
  );
};

export default Test;
