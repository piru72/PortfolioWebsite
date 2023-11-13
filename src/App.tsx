import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';
import Blog from './components/BlogIndex';
import CipherIndex from './components/CipherIndex';
import Introduction from './components/Introduction';

function App() {


  return (

    <>

      <Routes>

        <Route path="/" element={<Introduction />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/ciphers" element={<CipherIndex />} />
        <Route path="/About Me" element={<AboutMe />} />
      
      </Routes>

    </>
  );
}

export default App
