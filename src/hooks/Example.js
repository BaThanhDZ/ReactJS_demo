import React, { useState, useEffect } from 'react';

function Example(props) {
  const {fullName, age} = props;
  const [clickOutline, setclickOutline] = useState(0);
  const [clickInline, setclickInline] = useState('Task 01');

  return (
      <div>
        <p>Click {clickOutline} </p>
        <p>Task: {clickInline.toString()} </p>
        <p>Họ tên: {fullName}</p>
        <p>Tuổi: {age}</p>
        <button onClick={() => setclickOutline(clickOutline + 1)}>Click me</button>
      </div>
  )
}

export default Example;