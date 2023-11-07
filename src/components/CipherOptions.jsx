import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'
function CipherOptions({ onButtonClick }) {
  return (
    <div>
      <ButtonGroup gap='4'>
      <Button colorScheme='blue' onClick={() => onButtonClick('monoalphabetic')}>Monoalphabetic Cipher</Button>
      <Button colorScheme='blue' onClick={() => onButtonClick('polyalphabetic')}>Polyalphabetic Cipher</Button>
      <Button colorScheme='blue' onClick={() => onButtonClick('rowtransposition')}>Row Transposition Cipher</Button>
      <Button colorScheme='blue' onClick={() => onButtonClick('columntransposition')}>Column Transposition Cipher</Button>
      </ButtonGroup>
    </div>
  );
}

export default CipherOptions;
