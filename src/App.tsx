import './App.css'
import { Box } from '@chakra-ui/react'

import CipherOptions from './components/CipherOptions'
import Monoalphabetic from './components/Monoalphabetic'
function App() {
  

  return (

    <Box>

      <CipherOptions />
      <Monoalphabetic />

    </Box>

  )
}

export default App
