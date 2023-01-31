import './App.css';
import { About, Contact, Gallery, Home, NotFound, Plans, Trainers } from './pages/index.js';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Contact/>
      <Gallery/>
      <Plans/>
      <Trainers/>
      <Plans/>
      <NotFound/>
    </div>
  );
}

export default App;
