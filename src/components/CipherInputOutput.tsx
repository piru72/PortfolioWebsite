import React from 'react';
import { Input, Button, ButtonGroup, Box, Text, Container } from '@chakra-ui/react';

interface CipherInputOutputProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  outputValue: string;
  handleCipherInput: () => void;
  handleClearOutput: () => void;
}

function CipherInputOutput({
  inputValue,
  setInputValue,
  outputValue,
  handleCipherInput,
  handleClearOutput
}: CipherInputOutputProps) {
  return (

    <Container maxW="container.xl" centerContent mb={10} left={0}>


      <Input
        placeholder="Enter text..."
        mt={5}
        mb={5}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <ButtonGroup gap='2'>
        <Button colorScheme='green' onClick={handleCipherInput}>Cipher Input</Button>
        <Button colorScheme='red' onClick={handleClearOutput}>Clear Output</Button>
      </ButtonGroup>

      <Box id="outputBox" minH="3rem" w="100%" p={2} mt='1rem' border="1px solid" borderColor="gray.300" borderRadius="md" bg="gray.100">
        <Text fontSize="lg">{outputValue}</Text>
      </Box>



    </Container>

  );
}

export default CipherInputOutput;
