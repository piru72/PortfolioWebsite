import React, { useState } from 'react';

import './App.css';
import MonoalphabeticCipherForm from './components/MonoalphabeticCipherForm';
import PolyalphabeticCipherForm from './components/PolyAlphabeticCipherForm';
import RowTranspositionCipherForm from './components/RowTranspositioncipherForm';
import ColumnTranspositionCipherForm from './components/ColumnTranspositionCipher';

import CipherOptions from './components/CipherOptions';

import Footer from './components/Footer';
import { Box } from '@chakra-ui/react'
import NavbarChakra from './components/Navbar';

function App() {
  const [monoalphabeticPlaintext, setInputValue1] = useState('');
  const [monoalphabeticCiphertext, setOutputValue1] = useState('');

  const [polyalphabeticPlaintext, setInputValue2] = useState('');
  const [polyalphabeticCiphertext, setOutputValue2] = useState('');

  const [rowtranspositionPlaintext, setInputValue3] = useState('');
  const [rowtranspositionCiphertext, setOutputValue3] = useState('');

  const [columntranspositionPlaintext, setInputValue4] = useState('');
  const [columntranspositionCiphertext, setOutputValue4] = useState('');

  const [activeForm, setActiveForm] = useState('monoalphabetic');

  const handleButtonClick = (formName) => {
    setActiveForm(formName);
  };



  return (

    <Box>

      <NavbarChakra />

      <CipherOptions onButtonClick={handleButtonClick} />


      {activeForm === 'monoalphabetic' && (
        <MonoalphabeticCipherForm
          inputValue={monoalphabeticPlaintext}
          setInputValue={setInputValue1}
          outputValue={monoalphabeticCiphertext}
          setOutputValue={setOutputValue1}
        />
      )}

      {activeForm === 'polyalphabetic' && (
        <PolyalphabeticCipherForm
          inputValue={polyalphabeticPlaintext}
          setInputValue={setInputValue2}
          outputValue={polyalphabeticCiphertext}
          setOutputValue={setOutputValue2}
        />
      )}

      {activeForm === 'rowtransposition' && (
        <RowTranspositionCipherForm
          inputValue={rowtranspositionPlaintext}
          setInputValue={setInputValue3}
          outputValue={rowtranspositionCiphertext}
          setOutputValue={setOutputValue3}
        />
      )}

      {activeForm === 'columntransposition' && (
        <ColumnTranspositionCipherForm
          inputValue={columntranspositionPlaintext}
          setInputValue={setInputValue4}
          outputValue={columntranspositionCiphertext}
          setOutputValue={setOutputValue4}
        />
      )}


      <Footer />
    </Box>


  );
}

export default App;
