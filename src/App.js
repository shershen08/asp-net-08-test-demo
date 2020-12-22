import logo from './logo.svg';
import './App.css';
import HelloMessage from './Hello';

function App() {
  const test = 42
  const listMenus = ['home', 'about', 'login']

  //

  const userName = 'Alex'

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {/* {API_URL} */}
        </p>
        
        <h1>{test}</h1>

        {test > 43 ? <HelloMessage name="Mike"/> : null}

        <HelloMessage name={userName}/>
        <HelloMessage name="Alex" logged items={listMenus}/>
      </header>
    </div>
  );
}

export default App;
