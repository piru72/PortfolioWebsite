'use client'

import { Box, Button, ButtonGroup, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';



export default function CipherOptions(onButtonClick: any) {

    const navigate = useNavigate();
    const navigateTo = (path: string) => {
        navigate(path);
    }

    return (

        <Flex alignItems="center" justifyContent="center"  >
            <Box mt={5} mb={5}>
                <ButtonGroup gap='4' display={'flex'} flexWrap={'wrap'}  >
                    <Button w="15rem" colorScheme='blue' onClick={() => navigateTo('/blog/ciphers/monoalphabetic')}>Monoalphabetic Cipher</Button>
                    <Button w="15rem" colorScheme='blue' onClick={() => navigateTo('/polyaphabetic')}>Polyalphabetic Cipher</Button>
                    <Button w="15rem" colorScheme='blue' onClick={() => navigateTo('/rowtransposition')}>Row Transposition Cipher</Button>
                    <Button w="15rem" colorScheme='blue' onClick={() => navigateTo('/columntransposition')}>Column Transposition Cipher</Button>
                </ButtonGroup>
            </Box>
        </Flex>
    )
}