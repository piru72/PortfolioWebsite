import './App.css'
import { Box } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CipherOptions from './components/CipherOptions'
import Monoalphabetic from './components/Monoalphabetic'

function App() {
  return (

    <>

      <CipherOptions />

      <Routes>

        <Route path="/monoalphabetic" element={<Monoalphabetic />} />

      </Routes>

    </>
  );
}

export default App
