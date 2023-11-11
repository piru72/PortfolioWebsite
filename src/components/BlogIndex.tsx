import { Box, Button, Container } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const BlogIndex = () => {

  const navigate = useNavigate();
  const navigateTo = (path: string) => {
    navigate(path);
  }


  return (
    <Container> 
    <Box><Button w="15rem" colorScheme='blue' onClick={() => navigateTo('/blog/ciphers')}>Cipher Algorithms</Button> </Box>
    </Container>
  );
};

export default BlogIndex;