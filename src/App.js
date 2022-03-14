import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App" style={{backgroundColor: 'green', height: '100vh'}}>
      
      <Router>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
