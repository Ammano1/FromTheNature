import React from 'react'
import classes from './Content.module.css'

function Content(props) {
  return (
    <div className={classes.contentWrap}>
        <h2>{props.title}</h2>
        <div className={classes.content}>

        <div className={classes.image}>
            <img src={props.img} alt={props.alt}/>
        </div>
        <div className={classes.text}>
        {props.children}

        </div>
        </div>
    </div>
  )
}

export default Content