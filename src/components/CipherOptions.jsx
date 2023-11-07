import React from 'react';
import { Button, ButtonGroup, Box } from '@chakra-ui/react'
function CipherOptions({ onButtonClick }) {
  return (
    <Box mt={5}>
      <ButtonGroup gap='2' display={'flex'} flexWrap={'wrap'}  >
        <Button w="14rem" colorScheme='blue' onClick={() => onButtonClick('monoalphabetic')}>Monoalphabetic Cipher</Button>
        <Button w="14rem" colorScheme='blue' onClick={() => onButtonClick('polyalphabetic')}>Polyalphabetic Cipher</Button>
        <Button w="14rem" colorScheme='blue' onClick={() => onButtonClick('rowtransposition')}>Row Transposition Cipher</Button>
        <Button w="14rem" colorScheme='blue' onClick={() => onButtonClick('columntransposition')}>Column Transposition Cipher</Button>
      </ButtonGroup>
    </Box>
  );
}

export default CipherOptions;
