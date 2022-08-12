import React from "react";
import style from "./TaskList.module.css";
import TaskItem from "./TaskItem";

const TaskList = (props) => {
  return (
    <div>
      <ul className={style.tasklist__group}>
        {props.items.map((newTask) => (<TaskItem 
        key={newTask.id}
        task={newTask.task}  
        date={newTask.date} 
        status={newTask.status}
        />))}
        </ul>
    </div>
  );
};

export default TaskList;
