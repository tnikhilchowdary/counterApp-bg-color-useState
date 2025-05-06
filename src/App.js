
import './App.css';
import {react, useState} from 'react';


function App() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("white");

  function Inc(){
    setCount(prev => prev + 1);
    setBgColor("lightgreen");
  }

  function Dec(){
    setCount(prev => prev - 1);
    setBgColor("lightcoral");

  }

  function Reset(){
    setCount(0);
    setBgColor("lightblue");

  }
  return (
    <div className="App" style={{backgroundColor:bgColor}}>
      <h1>Counter App</h1>
      <div className='button-group'>
      <button onClick={Inc}>Increment</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Dec}>Decrement</button>
      </div>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
