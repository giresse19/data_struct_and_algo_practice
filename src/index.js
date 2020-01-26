
  //String reversal algorithm:
  const reverseString = str => {
    str
      .split("")
      .reverse()
      .join("");
  };
  
  // palindrome: word that reads backwards same as forward.
  const palindrome = str => {
    const initString = str.split();
    const reverseStr = str.reverseString().split();
    let i = 0;
    let j = 0;
  
    for (let i of initString) {
      for (let j of reverseStr) {
        if (initString[i].reverseString() !== reverseStr[j]) {
          console.log("not a palindrome");
          return;
        }
        continue;
      }
    }
  };
  
  // another approache palyndrome
  const isPalindrome = string => {
    const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
    const stringCharacters = string
      .toLowerCase()
      .split("")
      .reduce(
        (characters, character) =>
          validCharacters.indexOf(character) > -1
            ? characters.concat(character)
            : characters,
        []
      );
    return stringCharacters.join("") === stringCharacters.reverse().join("");
  };
  
  // reverse integer:
  const intReverse = integer => {
    integer.parseInt(
      interger
        .toString()
        .split()
        .reverse()
        .join("")
    ) * Math.sign(integer);
  };
  
  // fixx buzz.. trick is if else with modula arithmetic.
  // max character
  function maxChar(str) {
    var alreadyPassed = {};
  
    for (var i of str) {
      if (!alreadyPassed[i]) {
        alreadyPassed[i] = 1;
      } else {
        alreadyPassed[i]++;
      }
    }
    var maxCount = 0;
    var maxChar;
    for (var char in alreadyPassed) {
      if (alreadyPassed[char] > maxCount) {
        maxCount = alreadyPassed[char];
        maxChar = char;
      }
    }
    return maxChar;
  }
  
  console.log("answer", maxChar("Hello world!"));
  
  // anagram: check if two strings have identical characters.
  function charCount(str1) {
    var table = {};
    for (var i of str1.replace(/\W/g, "").toLowerCase()) {
      table[i] = table[i] + 1 || 1;
    }
    return table
  }
  
  function anagram(stringA, stringB) {
    var string1 = charCount(stringA);
    var string2 = charCount(stringB);
  
    if (Object.keys(string1).length !== Object.keys(string2).length) {
      return false;
    }
    for (var char in string1) {
      if (string1[char] !== string2[char]) {
        return false
      }
    }
    return true;
  }
  
  // regular expression count:        
  const vowels = string => {
    let count = 0;
    const choices = "aeiou"; // or ['a', 'e', 'i', 'o', 'u']
    
    for (let character of string.toLowerCase())
        if (choices.includes(character)) count++;
    
    return count;
  };
  
  // array chunking:
  // array = [1,2,3,4,5,5,6,7,8,9,10,11,12,13], size = 5
  function chunkArray(array, size) {
    let result = [];
    for (value of array) {
      let lastArray = result[result.length - 1];
      if(!lastArray || lastArray.length === size) {
        result.push([value]);
      }
      lastArray.push(value)
    }
  }
  
  function chunkSPlice(array, size) {
  
    let result = [];
    let arrayCopy = [...array];
  
    while (arrayCopy.length > 0) {
      result.push(arrayCopy.slice(0, size))
    }
    return result
  }
  
  function chunkArray(array, size) {
    let result = []
    for (let i = 0; i < array.length; i += size) {
        let chunk = array.slice(i, i + size)
        result.push(chunk)
    }
    return result
  }
  
  // combining arrays without duplicates
  function mergeArr(...arrays) {
    let jointArray = [];
  
    arrays.forEach(array => {
      jointArray = [...jointArray, ...array];
    });
    return Array.from(new Set([...jointArray]));
  }
  
  // better solution
  function mergeArrays(...arrays) {
    let jointArray = []
    arrays.forEach(array => {
      jointArray = [...jointArray, ...array];
    });
  
    uniqueArray = jointArray.filter((item, index) => {
      jointArray.indexOf(item) === index;
    })
    return uniqueArray
  }
  
  // falsy bouncer.. [1, 0, null, '', 5] => [1,5]
  function falsyBouncer(...array) {
  
    array.filter((item, index) => {
      return Boolean(item)
    })
  }
  
  function falsyBouncerBetter(...array) {
    const result = [];
    for (let item of array) {
      if (item) {
        result.push(item)
      }
    }
    return result;
  }
  
  //lowest index for 2nd arguement.
  function lastIndex(...array, num) {
  
    array.sort((a, b) => {
      return a - b;
    });
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] > num) return i
    }
    return array.length
  }
  
  // best solution; ([1,2,3,4], 1.5)
  
  function lastIndex(...array, num) {
    var counter = 0;
    for (let i = 0; i < array.length; i++) {
      if (num > array[i]) {
        counter++;
      }
  
    }
    return counter;
  }
  
  // integer reversal: 
  
  function intReverse(int) {
    return parseInt(int.toString().split().reverse().join()) * Math.sign(int);
  
  }
  
  // caesar cyphar 
  const caesarCipher = (string, number) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const input = string.toLowerCase();
    let output = "";
  
    for (let i = 0; i < input.length; i++) {
        const letter = input[i];
  
        if (alphabet.indexOf(letter) === -1) {
            output += letter;
            continue;
        }
  
        let index = alphabet.indexOf(letter) + number % 26;
        if (index > 25) index -= 26;
        if (index < 0) index += 26;
  
        output +=
            string[i] === string[i].toUpperCase()
                ? alphabet[index].toUpperCase()
                : alphabet[index];
    }
  
    return output;
  };
  
  // ransome note in magazine problem:
   const ransomNote = (note, magazine) => {
      const magazineWords = magazine.split(" ");
      const magazineHash = {};
  
      magazineWords.forEach(word => {
          if (!magazineHash[word]) magazineHash[word] = 0;
          magazineHash[word]++;
      });
  
      const noteWords = note.split(" ");
      let possible = true;
  
      noteWords.forEach(word => {
          if (magazineHash[word]) {
              magazineHash[word]--;
              if (magazineHash[word] < 0) possible = false;
          } else possible = false;
      });
  
      return possible;
  };
  
  // two sum problem, return array of values: [1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]
  function twoSum(...array, sum) {
    const result = [];
    valuesHash = {};
    array.forEach((item) => {
      if(!valuesHash[item]) valuesHash[item] = 0;
      valuesHash[item]++;
    })
    for (let i = 0; i < array.length; i++) {
      if (valuesHash[i] === (sum - array[i])) {
        let newArray = [];
        newArray.push(valuesHash[i], array[i])
        result.push(newArray);
      }
    }
    return result;
  }
  
  