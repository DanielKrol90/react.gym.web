import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { About, Contact, Gallery, Home, NotFound, Plans, Trainers } from './pages/index.js';
import { Navbar } from './components/index.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='plans' element={<Plans />} />
          <Route path='trainers' element={<Trainers />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
