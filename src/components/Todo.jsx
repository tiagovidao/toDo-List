import './Todo.scss'; // Importa o arquivo de estilos específico do componente 'Todo'.
import { useTodos } from '../TodosContext.jsx'; // Importa o contexto 'TodosContext'.

function Todo({ todo }) {
  
  const store = useTodos(); 
  // Acessa o estado global (lista de tarefas e dispatch) do contexto 'TodosContext'.

  return (
    <>
      <div className={`todo ${todo.isDone ? 'done' : ''}`}>
        {/* Adiciona a classe 'done' se a tarefa estiver marcada como concluída (isDone for true). */}

        <button 
          onClick={() => store.dispatch({
            type: 'deleted',
            id: todo.id
          })}
          className="erase"
        >
          x erase
        </button>
        {/* Botão que dispara a ação de exclusão da tarefa ao clicar, enviando uma ação 'deleted' para o reducer. */}

        <h3>{todo.title}</h3> 
        {/* Renderiza o título da tarefa. */}

        <p>{todo.description}</p> 
        {/* Renderiza a descrição da tarefa. */}

        <div className="task-check">
          <input 
            onClick={() => store.dispatch({
              type: 'toggleIsDone',
              id: todo.id
            })}
            type="checkbox"
            defaultChecked={todo.isDone} 
          />
          {/* Checkbox que alterna o status de conclusão da tarefa, acionando o dispatch com a ação 'toggleIsDone'. */}

          <label>{!todo.isDone ? 'To-Do' : 'Done'}</label> 
          {/* Exibe 'To-Do' se a tarefa não estiver concluída, e 'Done' se estiver concluída. */}
        </div>
      </div>
    </>
  );
}

export default Todo; 
// Exporta o componente 'Todo' para ser utilizado em outros componentes.
