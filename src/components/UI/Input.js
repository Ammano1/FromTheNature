import React from 'react'
import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={`${classes.inputForm} ${props.className}`}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref}{...props.input} />
        {props.children}
    </div>
  )
})

export default Input