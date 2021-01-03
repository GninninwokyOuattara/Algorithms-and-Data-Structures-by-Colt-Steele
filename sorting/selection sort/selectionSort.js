const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let smallest = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
        }
        if (smallest !== i) {
            swap(arr, i, smallest);
        }
    }
    console.log(arr);
};

arr = [2, 1, 6, 3, 9, 21, 44, 0, 688, 123];

selectionSort(arr);
