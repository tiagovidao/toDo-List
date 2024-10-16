import Header from './components/Header.jsx'; // Importa o componente 'Header' para o cabeçalho da aplicação.
import Home from './views/Home.jsx'; // Importa o componente 'Home' para a visualização principal da aplicação.
import { TodosProvider } from './TodosContext.jsx'; // Importa o provider 'TodosProvider' para envolver o aplicativo e fornecer o contexto.
import './App.scss'; // Importa o arquivo de estilos principal do aplicativo.

function App() {  
  return (  
    <>  
      <main> 
        <TodosProvider> 
          {/* Envolve o aplicativo no provider 'TodosProvider', permitindo que todos os componentes filhos acessem o estado e dispatch. */}
          <Header appName="To-Do List with React" />  
          <Home />  
        </TodosProvider>
      </main>  
    </>  
  )  
}  

export default App; 
// Exporta o componente 'App' para ser renderizado no arquivo principal (index).
