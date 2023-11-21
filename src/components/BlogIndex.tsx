'use client'

import {
  Container,
  Divider,
  Heading,
  Wrap
} from '@chakra-ui/react';
import BlogItem from './BlogItem';





const ArticleList = () => {
  return (
    <Container maxW={'7xl'} p="12">

      <Heading as="h2" marginTop="5">
        Latest articles
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">


        <BlogItem />

      </Wrap>

    </Container>
  )
}

export default ArticleList