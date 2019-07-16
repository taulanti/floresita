import React from 'react';
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div>
      <div className={classes.overlay} />
      <div className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}>
        {props.children}
      </div>
    </div>
  )
}

export default Modal