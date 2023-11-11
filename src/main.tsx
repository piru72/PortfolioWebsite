import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <BrowserRouter>
      <ChakraProvider>


        <Navbar />

        <App />

        <Footer />

      </ChakraProvider>
    </BrowserRouter>

  </React.StrictMode>
)
