'use client'

import {
    Box,
    WrapItem
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import BlogAuthor from './Blog/Authors';
import HeaderSection from './Blog/ListItemHeader';
import ShortDescription from './Blog/ListItemShortDescription';



const BlogItem = () => {

    const navigate = useNavigate();
    const navigateTo = (path: string) => {
        navigate(path);
    }
    return (


        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
            <Box w="100%" onClick={() => navigateTo('/blog/ciphers')}>


                <HeaderSection
                    title='Techniques of cipher'
                    imageSrc='https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                    tags={['Cyber Security', 'Ciphers']}
                />

                <ShortDescription description='Ciphers encrypt and decrypt information for secure 
                communication. They use algorithms to transform plaintext into ciphertext,
                 and vice versa with a key. Essential for maintaining confidentiality in
                  messaging and data transmission.'/>

                <BlogAuthor date={new Date('2023-11-21')} />
            </Box>


        </WrapItem>


    );
};

export default BlogItem;