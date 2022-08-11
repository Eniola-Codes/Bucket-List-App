import React from "react";
import style from "./TaskList.module.css";
import TaskItem from "./TaskItem";
import Box from "../UI/Box";

const TaskList = (props) => {
  return (
    <Box className={style.tasklist}>
      <ul className={style.tasklist__group}>
        {props.items.map((newTask) => (<TaskItem 
        key={newTask.id}
        task={newTask.task} 
        date={newTask.date} 
        status={newTask.status}
        />))}
        </ul>
    </Box>
  );
};

export default TaskList;
