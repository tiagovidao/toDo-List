import './Header.scss';
import { useTodos } from '../TodosContext';

function Header({ appName }) {

    const store = useTodos();

    return (
      <>
        <div className="header">
            <div className="container">
                <div className="header-side">
                    <h1>
                        {appName}
                    </h1>
                </div>
                <div className="header-side">
                    <button onClick={() => {store.setModalIsActive(true)}} className="btn secondary">+ Add Task</button>
                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default Header