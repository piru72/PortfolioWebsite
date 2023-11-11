import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Blog from './components/BlogIndex';
import CipherIndex from './components/CipherIndex';
import Monoalphabetic from './components/Monoalphabetic';

function App() {


  return (

    <>

      <Routes>

        <Route path="/monoalphabetic" element={<Monoalphabetic />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/ciphers" element={<CipherIndex />} />
        <Route path="/blog/ciphers/monoalphabetic" element={<Monoalphabetic />} />

      </Routes>

    </>
  );
}

export default App
