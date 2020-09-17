import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Navbar from './components/navbar/navbar';
import Home from './views/home/home';
import Experience from './views/experience/experience'
import Projects from './views/projects/projects'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Experience />
      <Projects />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
