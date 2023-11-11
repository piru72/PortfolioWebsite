
import { Box } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { useState } from 'react';
import { applyMonoalphabetic } from '../../controllers/Ciphers.ts';
import CipherInputOutput from '../CipherInputOutput.tsx';
import ReactMarkdown from 'react-markdown';

// @ts-ignore 
import markdown from '../../contents/MonoAlphabeticCipher.md'

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
                    <ReactMarkdown
                        children={markdown}
                        skipHtml
                    />
                </Box>




            </Container>


        </Box>

    )
}


