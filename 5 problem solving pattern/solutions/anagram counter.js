const validAnagram = (str1, str2) => {
    objStr1 = {};
    objStr2 = {};
    for (char of str1) {
        objStr1[char] = (objStr1[char] || 0) + 1;
    }
    for (char of str2) {
        objStr2[char] = (objStr2[char] || 0) + 1;
    }

    for (key in objStr1) {
        if (objStr1[key] !== objStr2[key]) {
            return false;
        }
    }
    return true;
};

//TEST CASES
console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
