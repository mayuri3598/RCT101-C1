import styles from "./addTask.module.css";

const AddTask = ({handleChange,submitTask,values}) => {
  // NOTE: do not delete `data-cy` key value pair
  
  
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" onChange={handleChange} value={values}/>
      <button disabled={!values} data-cy="add-task-button" onClick={submitTask}>+</button>
    </div>
  );
};

export default AddTask;
