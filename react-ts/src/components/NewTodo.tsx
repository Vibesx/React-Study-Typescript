import React from 'react'
import { useRef, useContext } from 'react';
import { TodosContext } from '../store/todos-context';

import classes from './NewTodo.module.css'

// commenting Props since we use context
// type Props = {
//     children? : React.ReactNode,
//     // we could remove the | undefined if we go for the current! approach instead of current?. This would infer the type of enteredText as only string
//     // it's probably the best approach, since we know that current will not be undefined and also further code will be cleaner, but will leave as this for educational purposes
//     // in the end will go with the ! approach, since it's too much of a hustle
//     // onAddTodo: (text: string | undefined) => void
//     onAddTodo: (text: string) => void
// }

const NewTodo: React.FC/*<Props>*/ = () => {
    const todosCtx = useContext(TodosContext);
    // useRef is implemented using Generics so it needs to know what type of element it is referring to, so it needs to contain this type as below; there are HTML..Elements for all types (input, button, etc)
    // it also needs a default value
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    // there are multiple types of React events, such as FormEvent and MouseEvent (onClick)
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        // the ? after current is kind of a check for null; if current is null, enteredText will be null, otherwise it will try to extract value; it is a good way of avoiding JS versions of NPE
        // there is also the ! sign which can be added at the end of a variable, when we know for sure that it will not be null
        // using ? infers the type of our variable to the type of the final value (in our case, todoTextInputRef.current?.value will be string, since value will be string) OR undefined, since ? accepts undefined values
        // using ! infers only the type of the final value, in our case string, since we tell JS we know for sure current cannot be null
        const enteredText = todoTextInputRef.current!.value;

        if(enteredText?.trim().length === 0) {
            // throw an error
            return;
        }

        // props.onAddTodo(enteredText);
        todosCtx.addTodo(enteredText);
        todoTextInputRef.current!.value = "";
    }
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor='text'>Todo text</label>
            <input id='text' type="text" ref={todoTextInputRef}/>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;
