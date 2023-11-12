
var mainString = 'qwertyuiopasdfghjklzxcvbnm';
var allChars = 'abcdefghijklmnopqrstuvwxyz'
export function getMonoAlphaBeticMapping(): Record<string, string> {

  
  const monoalphabeticMapping: Record<string, string> = {};

  for (var i = 0; i < allChars.length; i++) {
      
      var currentChar = allChars[i];
      var characterMap = mainString[i];
  
      monoalphabeticMapping[currentChar] = characterMap;
      monoalphabeticMapping[currentChar.toUpperCase()] = characterMap.toUpperCase();
  
    }

  return monoalphabeticMapping;
}

export function getPolyAlphaBeticMapping(): Record<string, string> {

  // now for different position of a character in the plain text, we will have different mapping
  // for example, if the character is at position 1, first character of the mapping like a is mapped to qwerty so if the character is at position 1, it will be mapped to q
  // if the character is at position 2, second character of the mapping like b is mapped to asdfgh so if the character is at position 2, it will be mapped to s

  var polyalphabeticMapping: Record<string, string> = {};

  for (var i = 0; i < allChars.length; i++) {

    var currentChar = allChars[i];
    var characterMap = mainString;

    polyalphabeticMapping[currentChar] = characterMap;
    polyalphabeticMapping[currentChar.toUpperCase()] = characterMap.toUpperCase();

    mainString = mainString[mainString.length - 1] + mainString.substring(0, mainString.length - 1);

  }

  return polyalphabeticMapping;
}
