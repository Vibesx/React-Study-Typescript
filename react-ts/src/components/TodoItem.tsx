import React from 'react'

import classes from './TodoItem.module.css';

type Props = {
    children?: React.ReactNode,
    key?: string
    text: string
    // adding the event as argument is optional
    onRemoveTodo: (/* event: React.MouseEvent */) => void
}

const TodoItem: React.FC<Props> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>
  )
}

export default TodoItem