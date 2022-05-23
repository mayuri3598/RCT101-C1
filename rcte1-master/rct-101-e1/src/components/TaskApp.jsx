import React, { useState } from "react";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader"
import AddTask from './AddTask/AddTask'
import Tasks from './Tasks/Tasks'
import data from '../data/tasks.json'
import { v4 as uuidv4 } from 'uuid';
const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [items,setItems] = useState("");
  const [tasks,setTasks] = useState(data);
  const handleChange = (e)=>{
    setItems(e.target.value);
   }
   const submitTask = ()=>{
     setTasks([...tasks,{
      "id": uuidv4(),
      "text": items,
      "done": true,
      "count": 1
    }])
     console.log(tasks);
     setItems("");
   }
   const deleteTask = (id)=>{
     console.log(id);
   }
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader/>
      {/* Add Task */}
      <AddTask handleChange={handleChange} submitTask={submitTask} values={items}/>
      {/* Tasks */}
      <Tasks tasks={tasks} deleteTask={deleteTask}/>
    </div>
  );
};

export default TaskApp;
