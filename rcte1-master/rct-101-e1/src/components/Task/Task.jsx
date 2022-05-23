import React from "react";
import styles from "./task.module.css";
import Counter from '../Counter/Counter'
const Task = ({task,deleteTask}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      {task.text}
      <div data-cy="task-text"></div>
      {/* Counter here */}
      <Counter/>
      <button data-cy="task-remove-button" onClick={()=>{
        deleteTask(task.text);
      }} >rm</button>
    </li>
  );
};

export default Task;
