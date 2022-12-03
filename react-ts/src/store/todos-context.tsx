import React, { useState } from "react";

import Todo from '../models/todo';

type TodoContext = {
    items: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodoContext>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC<{children?: React.ReactNode}> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (text: string) => {
      const newTodo = new Todo(text);
  
      setTodos(prevState => { 
        // concat creates a new array and returns it; push modifies the current array, which is not wanted behaviour in this case
        return prevState.concat(newTodo)
      });
    }
  
    const removeTodoHandler = (todoId: string) => {
      setTodos(prevTodos => {
        return prevTodos.filter(todo => todo.id !== todoId)
      })
    }

    const contextValue: TodoContext = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }
  
    return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
}

export default TodosContextProvider;