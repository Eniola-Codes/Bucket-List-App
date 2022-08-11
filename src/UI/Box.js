import React from 'react';
import style from './Box.module.css';

const Box = (props) =>
{
    return(
   <div className={`${style.box} ${props.className}`} >
        {props.children}
   </div>
    )
}

export default Box;