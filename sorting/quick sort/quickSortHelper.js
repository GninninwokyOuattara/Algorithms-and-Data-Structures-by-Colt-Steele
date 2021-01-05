const swap = (arr, idx1, idx2) => {
    return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
};

const quickSortHelper = (arr, startIdx = 0, endIdx = arr.length) => {
    let pivotValue = arr[startIdx];
    let pivotIndex = startIdx;
    for (let i = startIdx + 1; i < endIdx; i++) {
        if (pivotValue > arr[i]) {
            pivotIndex++;
            swap(arr, i, pivotIndex);
        }
    }
    swap(arr, startIdx, pivotIndex);
    return pivotIndex;
};

module.exports = quickSortHelper;
