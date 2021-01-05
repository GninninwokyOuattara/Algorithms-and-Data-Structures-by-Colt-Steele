const quickSortHelper = require("./quickSortHelper");

const quickSort = (arr, leftFromPivot = 0, rightFromPivot = arr.length) => {
    if (rightFromPivot - leftFromPivot > 1) {
        let pivot = quickSortHelper(arr, leftFromPivot, rightFromPivot);
        quickSort(arr, pivot + 1, rightFromPivot);
        quickSort(arr, leftFromPivot, pivot);
    }
    return arr;
};

arr = [9, 4, 8, 2, 1, 5, 7, 6, 3];

console.log(quickSort(arr));
