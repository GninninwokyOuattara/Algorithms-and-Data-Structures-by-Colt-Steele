const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// const swap = (arr, idx1, idx2) => {
//     let temps = arr[idx1];
//     arr[idx1] = arr[idx2];
//     arr[idx2] = temps;
// };

const bubbleSort = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
        }
    }
    return arr;
};

const arr = [2, 1, 5, 3, 7, 98, 21];

console.log(bubbleSort(arr));
