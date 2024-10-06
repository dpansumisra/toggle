import React, { useState } from 'react';
import mode from './component/mode.css'
const Change = () => {
  const [color, setColor] = useState(true); 
  return (
    <div className={color ? 'light-mode' : 'dark-mode'}>
      <button className="btn" onClick={() => setColor(!color)}>
        Mode: {color ? 'Light' : 'Dark'} 
      </button>
    </div>
  );
};

export default Change;
