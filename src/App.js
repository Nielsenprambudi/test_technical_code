import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [inputNumber, setInputNumber] = useState(0);
  const [result, setResult] = useState([]);
  const [typeRes, setTypeRes] = useState("triangle");

  const triangleGenerate = () => {
    if(inputNumber > 0) {
      setTypeRes("triangle");
      let dataInput = [];
      for(let x of inputNumber) {
        dataInput.push(x);
        setResult(dataInput);
      };
    } else {
      alert("you must fill input angka")
    }

  }
  
  const firstGenerate = () => {
    setResult([]);
    if(inputNumber > 0) {
      setTypeRes("first");
      let dataInput = [];
      for(let i = 1; i < inputNumber; i++) {
        if(i === i + 2) {
          console.log(i + 2)
        }
      }
    } else {
      alert("you must fill input angka")
    }
  }

  const primaryNumberGenerate = () => {
    setTypeRes("primary");
  }

  return (
    <div className="App">
      <div style={{marginTop: 100}}>
        <input 
          placeholder='Input Angka' 
          type="number" 
          value={inputNumber} 
          onChange={(e) => setInputNumber(e.target.value)}
        />
      </div>
      <div style={{marginTop: 10}}>
        <button onClick={() => triangleGenerate()} style={{marginRight: 5}}>Generate Segitiga</button>
        <button onClick={() => firstGenerate()} style={{marginRight: 5}}>Generate Bilangan Ganjil</button>
        <button onClick={() => primaryNumberGenerate()}>Generate Bilangan Prima</button>
      </div>
      <div>
        <h1>
          RESULT:
        </h1><br/>
        {
          typeRes === "triangle" &&
          result.map((x, i) => (
            <div key={i}>
              {x + "0".repeat(i + 1)}
            </div>
          ))
        }
        {
          typeRes === "first" &&
          result.map((x, i) => (
            <div key={i}>
              {x}
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
