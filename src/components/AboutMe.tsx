// Import necessary components
import { Link as ScrollLink } from 'react-scroll';
import {
  Button,
  Container,
  Box,
  Heading,
  Text,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import ProblemSolving from './ProblemSolving';

// Your component
const YourComponent = () => {
  return (
    <Container maxW="5xl" py={10}>
      {/* Buttons */}
      <Flex justify="space-around" mb={8}>
        
        <Button>
          <ScrollLink to="problemSolvingSection" smooth={true} duration={500}>
            Problem Solving
          </ScrollLink>
        </Button>
      </Flex>

      
    <ProblemSolving />
    </Container>
  );
};

export default YourComponent;
