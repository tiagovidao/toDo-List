import { createContext, useReducer, useContext } from "react"; // Importa createContext para criar o contexto e useReducer para gerenciar o estado.

export const TodosContext = createContext(""); 
// Cria o contexto 'TodosContext' para compartilhar o estado das tarefas e o dispatch entre os componentes.

const initialTodos = [  
  { id: 0, title: 'Do Groceries', description: 'Buy apples, rice, juice and toilet paper.', isDone: true },  
  { id: 1, title: 'Study React', description: 'Understand context & reducers.', isDone: false},  
  { id: 2, title: 'Learn Redux', description: 'Learn state management with Redux', isDone: false }  
]; 
// Define um estado inicial com uma lista de tarefas.

export function TodosProvider({children}) {  
  const [todos, dispatch] = useReducer(todosReducer, initialTodos); 
  // Usa o hook 'useReducer' para gerenciar o estado e ações das tarefas com o reducer 'todosReducer'.
  
  return (  
    <>  
      <main>  
        <TodosContext.Provider value={{todos, dispatch}}> 
          {/* Provedor do contexto que fornece o estado 'todos' e a função 'dispatch' para todos os componentes filhos. */}
          {children} 
        </TodosContext.Provider>  
      </main>  
    </>  
  )  
}  
// Exporta o provider 'TodosProvider' que vai englobar o aplicativo e permitir que os componentes filhos acessem o contexto.

export function  useTodos(){
    return useContext(TodosContext);
    
}

function todosReducer(todos, action) {  //Define uma função reducer que será responsável por manipular o estado 'todos' com base nas ações recebidas.

  
    switch(action.type) {
      case 'deleted': {
        if (confirm("Are you sure you want to delete the to-do?")) {
          return todos.filter(todo => todo.id !== action.id); 
          // Filtra a lista de tarefas removendo a tarefa com o id correspondente.
        }
      }
  
      case 'toggleIsDone': {
        return todos.map(todo => {
          if (todo.id === action.id) {
            todo.isDone = !todo.isDone; 
            // Altera o status 'isDone' da tarefa correspondente (true/false).
            return todo;
          } else {
            return todo;
          }
        });
      }
  
      default: 
        return todos; 
        // Retorna o estado atual se a ação não corresponder a nenhum case.
    }
  }
  