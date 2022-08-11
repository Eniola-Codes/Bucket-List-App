import React from 'react';
import style from './Button.module.css';

const Button = (props) =>
{
    return(
        <button className={style.button} type={props.type} onClick={props.onConfirm}>
            {props.children}
        </button>
    )
}

export default Button;