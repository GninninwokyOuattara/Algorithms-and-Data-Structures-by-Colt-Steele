// Normally with bubble sort, even if a good part of the array is already sorted
// It will keeps going until all the iteration of the for loop have been done.

// To bypass that, we implement a swapped variable that will
// break out of the for loop as soon as there is no swapped done in
// One iteration.

const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const bubbleSort = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        let swapped = true;
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                swapped = false;
            }
        }
        if (swapped) break;
    }
    return arr;
};

arr = [1, 2, 3, 8, 4, 3, 0, 3];
console.log(bubbleSort(arr));
