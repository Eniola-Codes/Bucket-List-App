import React, { useState } from "react";
import style from "./FormInputBox.module.css";
import Box from "../UI/Box";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const FormInputBox = (props) => {
  let [task, setTask] = useState("");
  let [dates, setDate] = useState("");
  let [status, setStatus] = useState("");
  let [isInputing, setIsInputting] = useState(false);
  let [isError, setIsError] = useState(false);

  const setTaskHandler = (event) => {
    setTask(event.target.value);
  };

  const setDateHandler = (event) => {
    setDate(event.target.value);
  };

  const setStatusHandler = (event) => {
    setStatus(event.target.value);
  };

  const onConfirmHandler = () => {
    let taskInfo = {
      task: task,
      date: new Date(dates),
      status: status,
      id : Math.random()
    };

    if(taskInfo.task.trim() === '')
    {
      setIsError(
        { header : 'inavlid Task Input',
        body : 'The task box cannot be empty'}
      );
      return;
    }

    if(taskInfo.status.trim() === 'Select Status')
    {
      setIsError(
        { header : 'inavlid Status Input',
        body : 'Please select an appropriate status'}
      );
      return;
    }

    props.fullTask(taskInfo);
    setTask("");
    setDate("");
    setStatus("Select Status");
    setIsInputting(false);
  };

  const isInputingHandler = () => {
    setIsInputting(true);
  };

  const onRemoveHandler = () =>
  {
    setIsError(null);
  }

  return (
    <>
    <div>
     <h1 className={style.header}>My Bucket</h1>
     </div>
    {isError && <ErrorModal onRemove={onRemoveHandler} header={isError.header} body={isError.body} />}
      <Box className={style.input_box}>
        {!isInputing && <Button onConfirm={isInputingHandler}>Add New Task</Button>}

        {isInputing && (
          <>
           
            <div>
              <label htmlFor="task-id">Task</label>
              <input
                type="text"
                id="task-id"
                onChange={setTaskHandler}
                value={task}
              ></input>
            </div>
            <div>
              <label htmlFor="date-id">Date</label>
              <input
                type="date"
                id="date-id"
                onChange={setDateHandler}
                value={dates}
                min="2020-01-01"
              ></input>
            </div>
            <div>
              <label htmlFor="status-id">Status</label>
              <select name="status" value={status} onChange={setStatusHandler}>
                <option value="Select status">Select Status</option>
                <option value="Not completed">Not Completed</option>
                <option value="Completed">Completed</option>
                <option value="Failed">Failed</option>
              </select>
            </div>
            <div>
              <Button onConfirm={onConfirmHandler}>Add Task</Button>
            </div>
          </>
        )}
      </Box>
    </>
  );
};

export default FormInputBox;
