'use client'

import { Box, ButtonGroup, Button, Flex } from '@chakra-ui/react'

export default function CipherOptions(onButtonClick: any) {
    return (

        <Flex alignItems="center" justifyContent="center"  >
            <Box mt={5} mb={5}>
                <ButtonGroup gap='4' display={'flex'} flexWrap={'wrap'}  >
                    <Button w="15rem" colorScheme='blue' onClick={() => onButtonClick('monoalphabetic')}>Monoalphabetic Cipher</Button>
                    <Button w="15rem" colorScheme='blue' onClick={() => onButtonClick('polyalphabetic')}>Polyalphabetic Cipher</Button>
                    <Button w="15rem" colorScheme='blue' onClick={() => onButtonClick('rowtransposition')}>Row Transposition Cipher</Button>
                    <Button w="15rem" colorScheme='blue' onClick={() => onButtonClick('columntransposition')}>Column Transposition Cipher</Button>
                </ButtonGroup>
            </Box>
        </Flex>
    )
}