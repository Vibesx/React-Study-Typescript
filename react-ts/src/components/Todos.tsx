import React, { useContext } from "react";
import TodoItem from './TodoItem';
import { TodosContext } from "../store/todos-context";

import classes from './Todos.module.css';

// FC stand for Functional Component
// apparently React 18 came with some changes that mean that FC will not automatically contain the children part and we need to add it manually, of type React.ReactNode
// or... we can just stop using React.FC altogether
// more info : https://stackoverflow.com/questions/71788254/react-18-typescript-children-fc/71800185#71800185
// and apparently key is not added either and needs to be added... great...
// note: removed props when I changed to using context; will leave it commented
// type Props = {
//     children?: React.ReactNode,
//     items: Todo[],
//     onRemoveTodo: (id: string) => void
// }
const Todos: React.FC/*<Props>*/ = () => {
    const todosCtx = useContext(TodosContext);

    return (<ul className={classes.todos}>
        {todosCtx.items.map(item => <TodoItem key={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}></TodoItem>)}
    </ul>)
}

export default Todos;