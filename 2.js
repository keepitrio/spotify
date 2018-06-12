function decodeString(s) {
    let stringsToRepeat = [];
    let timesToRepeat = [];
    let outputString = "";
    const splitString = s.split("");

    for(let i = 0; i < splitString.length; i++) {
      const char = splitString[i];
      if (Number.isInteger(parseInt(char))) timesToRepeat.push(parseInt(char));
      if (char === "[" || char.match(/[a-z]/)) stringsToRepeat.push(char);
      if (char === "]") {
        let j = splitString.indexOf(char);
        let currentStringToRepeat = "";
        while (splitString[j - 1] !== "[") {
          currentStringToRepeat = stringsToRepeat.pop() + currentStringToRepeat;
          j -= 1;
        }
        stringsToRepeat.pop();
        outputString = currentStringToRepeat.repeat(timesToRepeat.pop()) + outputString;
      }
    }

    return outputString;
}
