import "./App.css"
import { useTodoStore } from "./hooks/useTodoStore";

const App = () => {

  const store = useTodoStore();
  
  // data
  const { newTask, setNewTask, newTaskValue, setNewTaskValue, todos } = store;

  // functionality

  const { addTodo, removeTodo,toggleComplete, toggleEdit, handleDoneEdit } = store
  
  return (
    <>
      <h1>Tsx Crud</h1>

      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={addTodo}>Add</button>

      {todos.map((todo) => 
      <div key={todo.id}>
        {todo.isEditing === false && <h2>{todo.task}</h2>}

        <button onClick={() => removeTodo(todo.id)}>Remove</button>
        <button onClick={() => toggleComplete(todo.id)} className={todo.isCompleted ? `trueTask` : ``}>Complete</button>

        {todo.isEditing 
        ?  <div>
             <input type="text" value={newTaskValue} onChange={(e) => setNewTaskValue(e.target.value)}/>
            <button onClick={() => handleDoneEdit(todo, newTaskValue)}>Done edit</button>
          </div>
        : <button onClick={() => toggleEdit(todo)}>toggle edit</button>   
        }
      </div>
      )}
      
    </>
  );
};

export default App;
