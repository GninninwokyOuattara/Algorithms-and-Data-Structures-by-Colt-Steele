const { digitCount, getDigit, mostDigits } = require("./radixHelper");

const radixSort = (arr) => {
    let mostNumbersOfDigits = mostDigits(arr);
    for (let i = 0; i < mostNumbersOfDigits; i++) {
        // let bucket = [[], [], [], [], [], [], [], [], [], []];
        let bucket = Array.from({ length: 10 }, () => []); //Result in ^
        for (number of arr) bucket[getDigit(number, i)].push(number);
        arr = [];
        for (subBucket of bucket) arr = [...arr, ...subBucket];
    }
    return arr;
};
