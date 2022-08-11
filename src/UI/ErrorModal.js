import React from "react";
import style from './ErrorModal.module.css';
import Button from "./Button";

const ErrorModal = (props) =>
{
    return (
        <>
            <div className={style.backdrop} onClick={props.onRemove}></div>
            <div className={style.modal}>
            <div className={style.modal_header}>
                    <h2>{props.header}</h2>
            </div>
            <div className={style.modal_body}>
                    <p>{props.body}</p>
            </div>
            <div className={style.modal_footer}>
                    <Button onConfirm={props.onRemove}>Okay</Button>
            </div>
            </div>
        </>
    )
}

export default ErrorModal;