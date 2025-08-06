import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  // Counter functions
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const sayHello = () => {
    alert("Hello! This is a static message.");
  };

  const handleIncrement = () => {
    incrementCounter();
    sayHello();
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  // Welcome function with argument
  const sayWelcome = (message) => {
    alert(`Welcome! ${message}`);
  };

  // Synthetic event handler
  const handleClick = (event) => {
    alert("I was clicked");
  };

  return (
    <div className="App">
      <h1>Event Examples App</h1>
      
      {/* Counter Section */}
      <div>
        <h2>Counter Example</h2>
        <p>Counter: {counter}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>

      {/* Welcome Button */}
      <div>
        <h2>Welcome Button</h2>
        <button onClick={() => sayWelcome("welcome")}>Say Welcome</button>
      </div>

      {/* Synthetic Event Button */}
      <div>
        <h2>Synthetic Event</h2>
        <button onClick={handleClick}>Click Me</button>
      </div>

      {/* Currency Converter */}
      <CurrencyConverter />
    </div>
  );
}

// Currency Converter Component
function CurrencyConverter() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (rupees) {
      // Conversion rate: 1 Euro = approximately 90 INR (using a fixed rate for demo)
      const conversionRate = 90;
      const euroValue = parseFloat(rupees) / conversionRate;
      setEuro(euroValue.toFixed(2));
    }
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Indian Rupees (INR):</label>
          <input
            type="number"
            value={rupees}
            onChange={(e) => setRupees(e.target.value)}
            placeholder="Enter amount in INR"
          />
        </div>
        <button type="submit">Convert</button>
        {euro && (
          <div>
            <p>Converted to Euro: €{euro}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
