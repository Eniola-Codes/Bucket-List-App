import React from'react';

const TaskDate = (props) =>
{
                                                                       
  const month = props.date.toLocaleString("en-Us", { month: "long" });
  const day = props.date.toLocaleString("en-Us", { day: "2-digit" });
  const year = props.date.getFullYear();

    return (
        <>
      {year}, {month} {day}  
        </>
    );
}

export default TaskDate;