import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';
import Blog from './components/Blog/BlogIndex';
import CipherIndex from './components/Ciphers/CipherIndex';
import Introduction from './components/Introduction';
import IntuitionIndex from './components/Intuition/IntuitionIndex';

function App() {


  return (

    <>

      <Routes>

        <Route path="/" element={<Introduction />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/ciphers" element={<CipherIndex />} />
        <Route path="/blog/intuition" element={<IntuitionIndex />} />
        <Route path="/About Me" element={<AboutMe />} />
      
      </Routes>

    </>
  );
}

export default App
