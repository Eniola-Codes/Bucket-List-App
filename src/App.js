import React, { useState } from 'react';
import './App.css';
import FullTaskInfo from './FormInput/FullTaskInfo';
import TaskList from './TaskList/TaskList';


let dummyTask =
[
{
  key : 't1',
  task : 'Write to-do',
  status: 'Completed',
  date: new Date(2021, 5, 17)

},
{
  key : 't2',
  task : 'Do it now',
  status: 'Not Completed',
  date: new Date(2021, 5, 17)

}
]

const App = () => {
  let[newTask,setNewTask] = useState(dummyTask);

  const endTaskInfoHandler = (endTask) =>
  {
    console.log(endTask)

   setNewTask((prevTask) => { return [endTask, ...prevTask]});

  }

  // const deleteItemHandler = goalId => {
  //   setNewTask (prevGoals => {
  //     const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
  //     return updatedGoals;
  //   });
  // };


  return (
    <>
        <FullTaskInfo endTaskInfo={endTaskInfoHandler}/>
        <TaskList items={newTask}/>
    </>
  );
}

export default App;
