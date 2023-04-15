import logo from './heapspace_blue.jpg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {

  const [daysCounter, setDaysCounter] = useState("");

  function calculateDaysCounter() {
    const date1 = new Date('04/29/2022');
    const date2 = new Date();
    const difference = date2.getTime() - date1.getTime();
    setDaysCounter(Math.ceil(difference / (1000 * 3600 * 24)));
  }

  useEffect(() => {
    calculateDaysCounter();

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='counter-section'>
        <p>Mitina potraga za admin dispute dokumentima traje ovoliko dana:</p>
        <p>
          <span className='accent'>{daysCounter}</span>
        </p>
        </div>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
