import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloMessage from './Hello';

// Root com App.js --> Hello.js

function App() {
  const test = 42
  const listMenus = ['home', 'about', 'login']

  const [visible, setCount] = useState(false);
  const [userName, setUsername] = useState('Vasya');

// class -> componentDidMount, componentDidUpdate
// functional -> useEffect

  useEffect(() => {
    // Update the document title using the browser API
    console.log(visible, userName)
  });

  // console.log(process.env.NODE_ENV === 'development' ? 'development' : 'prod')
  // console.log(process.env.REACT_APP_API_URL)

  // if(process.env.NODE_ENV === 'development.local' ) {
  //   //local
  //   return ''
  // } else (process.env.NODE_ENV === 'development' )  {
  //   //staging
  // }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
    
        </p> */}
        
        {/* <h1>{test}</h1> */}


      <button onMouseOver={() => console.log}
              onClick={() => setCount(true)}>
        show component
      </button>
      <br>
      <br></br>

      <button onClick={() => setCount(false)}>
        hide component
      </button>

      <button onClick={() => setUsername('Alex')}>
        change userName
      </button>


<hr/><br/>

      {visible ? <HelloMessage name={userName} logged items={listMenus}/> : null}



        {/* {test > 43 ? <HelloMessage name="Mike"/> : null}
        <HelloMessage name={userName}/>
        <HelloMessage name="Alex" logged items={listMenus}/> */}
      </header>
    </div>
  );
}

export default App;
