import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './store/todos-context';

function App() {
  // we need to specify the type that useState is expecting, Todo array in our case
 
  return (
    <TodosContextProvider>
      <NewTodo></NewTodo>
      <Todos></Todos>
    </TodosContextProvider>
  );
}

export default App;
