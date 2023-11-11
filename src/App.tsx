import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/BlogIndex';
import CipherIndex from './components/CipherIndex';

function App() {


  return (

    <>

      <Routes>

    
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/ciphers" element={<CipherIndex />} />
      

      </Routes>

    </>
  );
}

export default App
