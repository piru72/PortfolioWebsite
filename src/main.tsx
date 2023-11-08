import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import  Navbar  from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>

      <Navbar />

      <App />

      <Footer />


    </ChakraProvider>

  </React.StrictMode>,
)
