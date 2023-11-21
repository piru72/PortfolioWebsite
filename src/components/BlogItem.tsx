// return a function 

'use client'

import {
    Box,
    Container,
    Divider,
    HStack,
    Heading,
    Image,
    Tag,
    Text,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface Props {
    marginTop?: number
    tags: any[]
}
const BlogTags = (props: Props) => {
    const { marginTop = 0, tags } = props

    return (
        <HStack spacing={2} marginTop={marginTop}>
            {tags.map((tag) => {
                return (
                    <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
                        {tag}
                    </Tag>
                )
            })}
        </HStack>
    )
}
interface BlogAuthorProps {
    date: Date
    name: string
}
const BlogAuthor = (props: BlogAuthorProps) => {


    return (
        <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            <Image
                borderRadius="full"
                boxSize="40px"
                src="https://100k-faces.glitch.me/random-image"
                alt={`Avatar of ${props.name}`}
            />
            <Text fontWeight="medium">{props.name}</Text>
            <Text>—</Text>
            <Text>{props.date.toLocaleDateString()}</Text>
        </HStack>
    )
}

const BlogItem = () => {

    const navigate = useNavigate();
    const navigateTo = (path: string) => {
        navigate(path);
    }
    return (


        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
            <Box w="100%" onClick={() => navigateTo('/blog/ciphers')}>
                <Box borderRadius="lg" overflow="hidden">
                    <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                        <Image
                            transform="scale(1.0)"
                            src={
                                'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                            }
                            alt="some text"
                            objectFit="contain"
                            width="100%"
                            transition="0.3s ease-in-out"
                            _hover={{
                                transform: 'scale(1.05)',
                            }}
                        />
                    </Box>
                </Box>
                <BlogTags tags={['Cyber Security', 'Ciphers']} marginTop={3} />
                <Heading fontSize="xl" marginTop="2">
                    <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                        Techniques of cipher
                    </Text>
                </Heading>
                <Text as="p" fontSize="md" marginTop="2">
                    Ciphers are cryptographic techniques used to encrypt and decrypt
                    information, ensuring secure communication. They transform plaintext
                    into ciphertext using specific algorithms, and the reverse process
                    is performed with the use of a key. Ciphers play a crucial role in
                    maintaining confidentiality and protecting sensitive data in
                    various applications, including messaging and data transmission.
                </Text>
                <BlogAuthor name="Parvez Ahammed" date={new Date('2021-04-06T19:01:27Z')} />
            </Box>


        </WrapItem>


    );
};

export default BlogItem ;