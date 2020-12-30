const averagePair = (arr, target) => {
    if (arr.length <= 1) return false;
    // for (let i = 1; i < arr.length; i++) {
    //     let average = Math.floor((arr[i + 1] + arr[i]) / 2);
    //     if (average == target) return true;
    // }
    let leftP = arr[0];
    let i = 1;
    while (i < arr.length) {
        let rightP = arr[i];
        let average = Math.floor((leftP + rightP) / 2);
        if (average == target) return true;
        leftP = arr[i];
        i++;
    }
    return false;
};

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
