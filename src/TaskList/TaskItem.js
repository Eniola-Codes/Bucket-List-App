import React from'react';
import TaskDate from './TaskDate';

const TaskItem = (props) =>
{
    
    return (
    <li >   
        {props.task} <TaskDate date={props.date}/> {props.status}
    </li>
    )

}

export default TaskItem;