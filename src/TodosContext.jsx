import { createContext, useReducer, useContext, useState, useEffect } from "react"; 

export const TodosContext = createContext(""); 
 
const initialTodos =  localStorage.getItem('todos') ? 
  JSON.parse(localStorage.getItem('todos')) 
  : []; 

export function TodosProvider({children}) {  
  const [todos, dispatch] = useReducer(todosReducer, initialTodos); 
  
  const [modalIsActive, setModalIsActive] = useState(false); 

  const [filterBy, setFilterBy] = useState(''); 

  function filteredTodos(){
    switch(filterBy){
      case 'todo':
        return todos.filter(todo => !todo.isDone);
      case 'done':
        return todos.filter(todo => todo.isDone);
      default:
        return todos;
    }
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))

  }, [todos]);

  return (  
    <>  
      <main>  
        <TodosContext.Provider 
          value={
            {
              todos, 
              dispatch, 
              modalIsActive,
              setModalIsActive,
              filterBy,
              setFilterBy,
              filteredTodos
            }
          }> 
          {children} 
        </TodosContext.Provider>  
      </main>  
    </>  
  )  
}  

export function  useTodos(){
    return useContext(TodosContext);
    
}

function todosReducer(todos, action) {  

    switch(action.type) {
      case 'added': {
          let newTodo = action.newTodo;
          newTodo.id = todos.length ? Math.max(...todos.map(todo => todo.id)) + 1: 1;
          return [...todos, newTodo];
      }

      case 'deleted': {
        if (confirm("Are you sure you want to delete the to-do?")) {
          return todos.filter(todo => todo.id !== action.id); 
        } else{
          return todos;
        }
      }

      case 'toggleIsDone': {
        return todos.map(todo => {
          if (todo.id === action.id) {
            return { ...todo, isDone: !todo.isDone }; // Clona e modifica o `isDone`
          }
          return todo;
        });
      }
      

      default: 
        return todos; 
    }
  }