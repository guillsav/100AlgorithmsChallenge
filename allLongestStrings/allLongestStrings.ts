function allLongestStrings(inputArray: string[]): string[] {
  let strLength = inputArray[0].length;
  let result = [];

  inputArray.forEach((str: string )=> {
    if(str.length === strLength) {
      return result.push(str);
    };

    if(str.length > strLength) {
      strLength = str.length;
      result = [];
      return result.push(str);
    };

    return '';
  })
  return result;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));