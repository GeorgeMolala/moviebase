import logo from './logo.svg';
import './App.css';
import Heads from "./LoggedIn/header.jsx";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LogIn from "./LogIn/login.jsx"
import Routess from './Routes.js'

function App() {
  return (
    <div className="App">
      
      <header className="App-header">

          <Routess/>
        
      </header>

    </div>
  );
}

export default App;
