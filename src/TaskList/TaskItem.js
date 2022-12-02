import React from "react";
import TaskDate from "./TaskDate";
import classes from "./TaskItem.module.css";

const TaskItem = (props) => {
  return (
    <li className={classes.task__list} onClick={props.onClick}>
      <span><TaskDate date={props.date} /></span> 
      <span className={classes.task_item}>{props.task}</span>
      <span className={classes.task_status}>{props.status}</span>
    </li>
  );
};

export default TaskItem;
