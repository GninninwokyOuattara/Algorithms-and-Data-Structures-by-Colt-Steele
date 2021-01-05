const merge = require("./merge");
const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let leftArr = arr.slice(0, arr.length / 2);
    let rightArr = arr.slice(arr.length / 2);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
};
