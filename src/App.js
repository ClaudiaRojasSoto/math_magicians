import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from 'react-router-dom';
import './styles/App.css';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="nav">
            <h1 className="logo">Math Magicians</h1>
            <ul className="nav-links">
              <li>
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li>
                <Link to="/calculator" className="nav-link">Calculator</Link>
              </li>
              <li>
                <Link to="/quote" className="nav-link">Quote</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
