function sortByStrings(s,t) {
    const sArr = s.split("");
    const tArr = t.split("");
    let occurenceMap = {};
    let outputString = "";

    sArr.forEach((letter) => {
        if (occurenceMap.hasOwnProperty(letter)) {
            occurenceMap[letter] += 1;
        } else {
            occurenceMap[letter] = 1;
        }
    });

    tArr.forEach((letter) => {
        if (!occurenceMap[letter]) return;
        outputString += letter.repeat(occurenceMap[letter]);
    });

    return outputString;
}
