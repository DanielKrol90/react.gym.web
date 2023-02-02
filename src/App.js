import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { About, Contact, Gallery, Home, NotFound, Plans, Trainers } from './pages/index.js';
import { Navbar, Header } from './components/index.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Home/>
        <About/> 
        <Contact/>
        <Gallery/>
        <Plans/>
        <Trainers/>
        <Plans/>
        <NotFound/>
      </BrowserRouter>
    </div>
  );
}

export default App;
