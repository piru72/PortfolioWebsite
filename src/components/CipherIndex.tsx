import { Box, Button, ButtonGroup, Flex } from '@chakra-ui/react';

import { useState } from 'react';
import MonoalphabeticCipher from './Ciphers/Monoalphabetic';
import PolyalphabeticCipher from './Ciphers/Polyalphabetic';
import RowTranspositionCipher from './Ciphers/RowTransposition';
import ColumnTranspositionCipher from './Ciphers/ColumnTransposition';

function CipherIndex() {
  
  const [selectedCipher, setSelectedCipher] = useState('monoalphabetic');
  const handleButtonClick = (cipherType: string): void => {
    setSelectedCipher(cipherType);
  };

  return (
    <>
      <Flex alignItems="center" justifyContent="center">
        <Box mt={5} mb={5}>
          <ButtonGroup gap="4" display="flex" flexWrap="wrap">
            <Button w="15rem" colorScheme="blue" onClick={() => handleButtonClick('monoalphabetic')}>
              Monoalphabetic Cipher
            </Button>
            <Button w="15rem" colorScheme="blue" onClick={() => handleButtonClick('polyalphabetic')}>
              Polyalphabetic Cipher
            </Button>
            <Button w="15rem" colorScheme="blue" onClick={() => handleButtonClick('rowtransposition')}>
              Row Transposition Cipher
            </Button>
            <Button w="15rem" colorScheme="blue" onClick={() => handleButtonClick('columntransposition')}>
              Column Transposition Cipher
            </Button>
          </ButtonGroup>
        </Box>
      </Flex>

      
      {selectedCipher === 'monoalphabetic' && <MonoalphabeticCipher />}
      {selectedCipher === 'polyalphabetic' && <PolyalphabeticCipher />}
      {selectedCipher === 'rowtransposition' && <RowTranspositionCipher />}
      {selectedCipher === 'columntransposition' && <ColumnTranspositionCipher />}
      
    </>
  );
}

export default CipherIndex
