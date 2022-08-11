import React from 'react';
import FormInputBox from './FormInputBox'

function FullTaskInfo(props) {

    const fullTaskHandler = (taskInfo) =>
    {
        let allTaskInfo = {...taskInfo, id : Math.random() * 10};
        
        props.endTaskInfo(allTaskInfo);
    }

  return (
    <>
         <FormInputBox fullTask={fullTaskHandler}/>
    </>
  );
}

export default FullTaskInfo;
