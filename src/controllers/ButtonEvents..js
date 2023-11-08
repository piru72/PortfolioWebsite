import { applyMonoalphabetic } from './Ciphers';

export function handleInputChange(event, setInputValue) {
    setInputValue(event.target.value);
  }
  
  export function handleProcessClick(inputValue, setOutputValue) {

    var outputValue = applyMonoalphabetic(inputValue);
    setOutputValue(outputValue);
  }
  
export function handleClearClick(setOutputValue) {
    setOutputValue('');
  }
  