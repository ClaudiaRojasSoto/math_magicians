import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calculator />
        <Quote />
      </header>
    </div>
  );
}

export default App;
