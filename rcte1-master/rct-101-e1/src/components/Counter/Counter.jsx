import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  
  const [count,setCount] = useState(1);
  const handleCount = (val)=>{
    if(count==1&&val==-1){
      setCount(1);
    }
    else{
      setCount(count+val);
    }
   
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={()=>{
        handleCount(+1);
      }}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={()=>{
        handleCount(-1);
      }}>-</button>
    </div>
  );
};

export default Counter;
