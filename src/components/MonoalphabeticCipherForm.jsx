import React from 'react';

import { handleInputChange, handleProcessClick, handleClearClick } from '../controllers/ButtonEvents';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Heading , Box , Text } from '@chakra-ui/react'

function MonoalphabeticCipherForm({ inputValue, setInputValue, outputValue, setOutputValue }) {
  return (
    <Box>


      <Heading>Monoalphabetic Cipher Example</Heading>


      <Input
        value={inputValue}
        onChange={(event) => handleInputChange(event, setInputValue)}
        placeholder="Enter text..."
      />

      <Box >
   
      <ButtonGroup gap='4'>
        <Button colorScheme='green' onClick={() => handleProcessClick(inputValue, setOutputValue)}>Cipher Input</Button>
        <Button colorScheme='red' onClick={() => handleClearClick(setOutputValue)}>Clear Output</Button>
      </ButtonGroup>

      </Box>

      <Box id="outputBox" h="3rem">

        <Box> {outputValue}</Box>
        

      </Box>
     


      <Box  display="flex"
      alignItems="center"
      // give bottom margin to the box
      mt={6}
      mb={6}

      justifyContent="center" >

        <Box maxW='50rem' className="content">
          <Heading mb={4}>Mono Alphabetic Substitution</Heading>
          <Text fontSize='xl'>
            In Mono-alphabetic Substitution, each of the symbols in the plaintext, say, the 26 letters for simplicity, map onto some other letter. For example,

          </Text>

          <p>
            <strong>Plaintext:</strong> a b c d e f g h i j k l m n o p q r s t u v w x y z
          </p>
          <p>
            <strong>Ciphertext:</strong> Q W E R T Y U I O P A S D F G H J K L Z X C V B N M
          </p>
          <p>
            The general system of symbol for symbol substitution is called a mono alphabetic substitution. 'attack' would be transformed into the cipher text 'QZZQEA'.
          </p>

        </Box>
      </Box>



    </Box>
  );
}

export default MonoalphabeticCipherForm;
