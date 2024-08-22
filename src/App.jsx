import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import About from './About.jsx';

function App() {
  return (
    <div>
 
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/about' element={<About />} />
     
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
