import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import RemoveBackground from './RemoveBackground.jsx';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/remove' element={<RemoveBackground/>} />
     
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
