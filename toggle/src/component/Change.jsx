import React, { useState } from 'react';
import  './mode.css'
const Change = () => {
  const [color, setColor] = useState(true); 
  const onClickformode = () =>{
    if(color === true){
        setColor(false);
    }
    else setColor(true);
  }
  return (
    <div className={color ? 'light-mode' : 'dark-mode'}>
      <button className="btn" onClick={onClickformode}>
        Mode {color ? 'Light' : 'Dark'} 
      </button>
    </div>
  );
};

export default Change;
