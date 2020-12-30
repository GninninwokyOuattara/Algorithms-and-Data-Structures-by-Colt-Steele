const maxSubarraySum = (arr, n) => {
    if (arr.length < n) return null;
    // max = -Infinity
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
    let max = sum;
    for (let i = 1; i < arr.length - n; i++) {
        sum = sum - arr[i - 1] + arr[i + n - 1];
        if (sum > max) max = sum;
    }
    return max;
};
