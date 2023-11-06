import React from 'react';
import InputField from './InputField';
import { handleInputChange, handleProcessClick, handleClearClick } from '../controllers/ButtonEvents';

function RowTranspositionCipherForm({ inputValue, setInputValue, outputValue, setOutputValue }) {
  return (
    <div>
      <h1>Row Transposition Cipher Example</h1>
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
          <h1>Complex Transposition Approach</h1>
          <p>
            It is a more complex transposition approach where letters of the message are written out in rows over a specified number of columns, and then the columns are reordered according to some key before reading off the rows.
          </p>
          <p>
            <strong>Key:</strong> 41532
          </p>
          <p>
            <strong>Plain Text:</strong> the simplest possible transpositions
          </p>
          <p>
            <strong>Cipher Text:</strong> s t i e h e m s l p s t s o p e i t l b s r p n a t o i i s x o x s n
          </p>
        </div>
      </div>
    </div>
  );
}

export default RowTranspositionCipherForm;