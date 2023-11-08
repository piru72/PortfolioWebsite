
import { Box } from '@chakra-ui/react'
import { Heading, Text } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { useState } from 'react';
import { applyMonoalphabetic } from '../controllers/Ciphers.ts';
import CipherInputOutput from './CipherInputOutput.tsx';
export default function Monoalphabetic() {

    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');

    const handleCipherInput = () => {
        const cipheredText = applyMonoalphabetic(inputValue);
        setOutputValue(cipheredText);
    };

    const handleClearOutput = () => {
        setOutputValue('');
    };

    return (

        <Box>

            <Heading as="h1" size="xl" textAlign="center" color="blue.500" mb={5} >
                Monoalphabetic Cipher
            </Heading>


            <Container maxW="container.xl" centerContent mb={10} left={0}>
                <CipherInputOutput
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    outputValue={outputValue}
                    handleCipherInput={handleCipherInput}
                    handleClearOutput={handleClearOutput}
                />
            </Container>



            <Container maxW="container.xl" centerContent mb={10} left={0}>
                <Box maxW='50rem' className="content">
                    <Heading mb={4}>Mono Alphabetic Substitution</Heading>
                    <Text fontSize='xl'>
                        In Mono-alphabetic Substitution, each of the symbols in the plaintext, say, the 26 letters for simplicity, map onto some other letter. For example,
                    </Text>
                    <p>
                        <strong>Plaintext:</strong> a b c d e f g h i j k l m n o p q r s t u v w x y z
                    </p>
                    <p>
                        <strong>Ciphertext:</strong> Q W E R T Y U I O P A S D F G H J K L Z X C V B N M
                    </p>
                    <p>
                        The general system of symbol for symbol substitution is called a mono alphabetic substitution. 'attack' would be transformed into the cipher text 'QZZQEA'.
                    </p>
                </Box>


            </Container>


        </Box>

    )
}


