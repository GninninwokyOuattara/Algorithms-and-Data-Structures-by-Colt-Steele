const { digitCount, getDigit, mostDigits } = require("./radixHelper");

const radixSort = (arr) => {
    let mostNumbersOfDigits = mostDigits(arr);
    for (let i = 0; i < mostNumbersOfDigits; i++) {
        let bucket = [[], [], [], [], [], [], [], [], [], []];
        for (number of arr) bucket[getDigit(number, i)].push(number);
        arr = [];
        for (subBucket of bucket) arr = [...arr, ...subBucket];
    }
    return arr;
};

arr = [
    12,
    244,
    12,
    687,
    123,
    4365478,
    2312,
    2354,
    56867,
    234,
    1234,
    654,
    23423,
    575,
    2342,
    123,
];

console.log(radixSort(arr));
