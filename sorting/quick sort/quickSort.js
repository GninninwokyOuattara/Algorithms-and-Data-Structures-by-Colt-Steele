const quickSortHelper = require("./quickSortHelper");

const quickSort = (arr, leftFromPivot = 0, rightFromPivot = arr.length) => {
    if (rightFromPivot - leftFromPivot > 1) {
        let pivot = quickSortHelper(arr, leftFromPivot, rightFromPivot);
        quickSort(arr, pivot + 1, rightFromPivot);
        quickSort(arr, leftFromPivot, pivot);
    }
    return arr;
};
