import React from "react";
import styles from "./tasks.module.css";
import Task from '../Task/Task'
import { v4 as uuidv4 } from 'uuid';
const Tasks = ({tasks,deleteTask}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {tasks.map(task=>(
          <Task task={task} key={uuidv4()} deleteTask={deleteTask}/>
        ))}
        
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
