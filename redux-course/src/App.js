import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Welcome to React Js
        </p>       
      </header>

      <div className="Todo-App">
        <form>
          <input type="text" />
        </form>
        <div className="Todo-List">
          <ul>
            <li>
              <input type="checkbox" />Create Static UI
            </li>
            <li>
              <input type="checkbox" />Create Initial State
            </li>
            <li>
              <input type="checkbox" />Create Static UI
            </li>
          </ul>
        </div>
      </div>      


    </div>
  );
}

export default App;
