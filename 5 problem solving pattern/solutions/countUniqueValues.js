const countUniqueValues = (arr) => {
    if (!arr.length > 0) return 0;
    if (arr.length === 1) return 1;
    index = 0;
    for (let i = 1; i <= arr.length; i++) {
        if (arr[index] !== arr[i]) {
            index++;
            arr[index] = arr[i];
        }
    }
    return index;
};

//TEST CASES

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
