import React from 'react';

import { handleInputChange, handleProcessClick, handleClearClick } from '../controllers/ButtonEvents';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'

function MonoalphabeticCipherForm({ inputValue, setInputValue, outputValue, setOutputValue }) {
  return (
    <div>

      
      <h1>Monoalphabetic Cipher Example</h1>


      <Input
        value={inputValue}
        onChange={(event) => handleInputChange(event, setInputValue)}
        placeholder="Enter text..."
      />

      <ButtonGroup gap='4'>
        <Button colorScheme='green' onClick={() => handleProcessClick(inputValue, setOutputValue)}>Cipher Input</Button>
        <Button colorScheme='red' onClick={() => handleClearClick(setOutputValue)}>Clear Output</Button>
      </ButtonGroup>
      <div id="outputBox">
        <p></p>
        <div>{outputValue}</div>
      </div>

      <div className="container">
        <div className="content">
          <h1>Mono Alphabetic Substitution</h1>
          <p>
            In Mono-alphabetic Substitution, each of the symbols in the plaintext, say, the 26 letters for simplicity, map onto some other letter. For example,
          </p>
          <p>
            <strong>Plaintext:</strong> a b c d e f g h i j k l m n o p q r s t u v w x y z
          </p>
          <p>
            <strong>Ciphertext:</strong> Q W E R T Y U I O P A S D F G H J K L Z X C V B N M
          </p>
          <p>
            The general system of symbol for symbol substitution is called a mono alphabetic substitution. 'attack' would be transformed into the cipher text 'QZZQEA'.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MonoalphabeticCipherForm;
