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
    </div>
  );
}

export default PolyalphabeticCipherForm;
