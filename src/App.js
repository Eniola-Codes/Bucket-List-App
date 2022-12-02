import React, { useEffect, useState } from "react";
import "./App.css";
import FullTaskInfo from "./FormInput/FullTaskInfo";
import FullInputBox from "./FormInput/FormInputBox";
import TaskList from "./TaskList/TaskList";

let dummyTask = [
  {
    id: "t1",
    task: "Write to-do",
    status: "Completed",
    date: new Date(2021, 5, 17),
  },
  {
    id: "t2",
    task: "Do it now",
    status: "Not Completed",
    date: new Date(2021, 5, 17),
  },
];

const App = () => {
  let [newTask, setNewTask] = useState(dummyTask);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://my-bucket-f9503-default-rtdb.firebaseio.com/task"
      );

      const data = response.json();
      setNewTask(data);
    };

    fetchData();
  }, []);

  const endTaskInfoHandler = (endTask) => {
    const sendReq = async () => {
      const response = await fetch(
        "https://my-bucket-f9503-default-rtdb.firebaseio.com/task",
        {
          method: "POST",
          body: JSON.Stringify(),
          headers: { "Content-type " : "application/json" },
        }
      );
    };

    sendReq();

    setNewTask((prevTask) => {
      return [endTask, ...prevTask];
    });
  };

  const onDeleteItemHandler = (todoId) => {
    setNewTask((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <>
      <FullInputBox fullTask={endTaskInfoHandler} />
      <TaskList items={newTask} onDeleteItem={onDeleteItemHandler} />
    </>
  );
};

export default App;
