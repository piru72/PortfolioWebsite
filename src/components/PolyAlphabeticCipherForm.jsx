import React from 'react';
import InputField from './InputField';
import { handleInputChange, handleProcessClick, handleClearClick } from '../controllers/ButtonEvents';

function PolyalphabeticCipherForm({ inputValue, setInputValue, outputValue, setOutputValue }) {
  return (
    <div>
      <h1>Polyalphabetic Cipher Example</h1>
      <InputField
        value={inputValue}
        onChange={(event) => handleInputChange(event, setInputValue)}
        placeholder="Enter text..."
      />
      <button onClick={() => handleProcessClick(inputValue, setOutputValue)}>Cipher Input</button>
      <button onClick={() => handleClearClick(setOutputValue)}>Clear Output</button>
      <div id="outputBox">
        <p></p>
        <div>{outputValue}</div>
      </div>

      <div className="container">
        <div className="content">
          <h1>Poly Alphabetic Substitution</h1>
          <p>
            A poly-alphabetic cipher is any cipher based on substitution, using several substitution alphabets.
          </p>
          <p>
            In polyalphabetic substitution ciphers, the plaintext letters are enciphered differently based upon their position in the text. Rather than being a one-to-one correspondence, there is a one-to-many relationship between each letter and its substitutes.
          </p>
          <p>
            For example, 'a' can be enciphered as 'd' in the beginning of the text but as 'n' in the middle.
          </p>
        </div>
      </div>
    </div>


  );
}

export default PolyalphabeticCipherForm;
