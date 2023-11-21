import { Box, Button, ButtonGroup, Container, Flex } from '@chakra-ui/react';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
// @ts-ignore 
import binarySearch from '../../contents/Intuition/BinarySearch.md'
// @ts-ignore
import twoPointer from '../../contents/Intuition/TwoPointer.md'
// @ts-ignore
import bitManipulation from '../../contents/Intuition/BitManipulation.md'
// @ts-ignore
import modularArithmatic from '../../contents/Intuition/ModularArithmatic.md'

function capitalizeFirstLetter(word: string): string {
  return word
    .replace(/([A-Z])/g, ' $1') 
    .trim()
    .toLowerCase()
    .replace(/^./, (str) => str.toUpperCase()); 
}

const intuitionContents: Record<string, any> = {
  binarySearch,
  twoPointer,
  bitManipulation,
  modularArithmatic,
};

function IntuitionIndex() {

  const [selectedIntuition, setSelectedIntution] = useState('binarySearch');
  const handleButtonClick = (intuitionType: string): void => {
    setSelectedIntution(intuitionType);
  };

  return (
    <>
      <Flex alignItems="center" justifyContent="center">
        <Box mt={5} mb={5}>
          <ButtonGroup gap="4" display="flex" flexWrap="wrap">
            {Object.keys(intuitionContents).map((intuitionType) => (
              <Button
                key={intuitionType}
                w="15rem"
                colorScheme="blue"
                onClick={() => handleButtonClick(intuitionType)}
                isActive={selectedIntuition === intuitionType}
              >
                {capitalizeFirstLetter(intuitionType)}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      </Flex>

      <Container maxW="container.xl" centerContent mb={10} left={0}>
        <Box maxW="50rem" className="content">
          <ReactMarkdown
            children={intuitionContents[selectedIntuition]}
            skipHtml />
        </Box>
      </Container>
    </>
  );
}

export default IntuitionIndex
