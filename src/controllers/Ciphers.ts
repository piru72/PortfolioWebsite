import { getMonoAlphaBeticMapping, getPolyAlphaBeticMapping } from './Mapper.ts';

export function applyMonoalphabetic(plainText: string): string {
    var cipherText = '';
    var monoalphabeticMapping = getMonoAlphaBeticMapping();
    var plainTextArray = plainText.split(' ');

    for (var i = 0; i < plainTextArray.length; i++) {
        var currentWord = plainTextArray[i];

        for (var j = 0; j < currentWord.length; j++) {
            var currentChar = currentWord[j];
            var cipherChar = monoalphabeticMapping[currentChar];
            cipherText += cipherChar;
        }
        cipherText += ' ';
    }
    
    return cipherText;
}

export function applyPolyAlphabetic(plainText: string): string {


    var cipherText = '';
    var PolyAlphabeticMapping = getPolyAlphaBeticMapping();
    var plainTextArray = plainText.split(' ');

    for (var i = 0; i < plainTextArray.length; i++) {

        var currentWord = plainTextArray[i];

        for (var j = 0; j < currentWord.length; j++) {

            var currentChar = currentWord[j];
            var position = j ;
            var mapping = PolyAlphabeticMapping[currentChar];
            var cipherChar = mapping[position];
            cipherText += cipherChar;
        }

        cipherText += ' ';
    }
    return cipherText;
}

export function applyRowTransposition(plainText: string) : string{

    
    var plainText = plainText.replace(/\s/g, "");


    var key = "41532";
    var keyLen = key.length;

    while(plainText.length % keyLen != 0){
        plainText += "x";
    }

  

    


    return plainText+ "\n";
}




