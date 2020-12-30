const minSubArrayLen = (arr, n) => {
    let maxSub = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > n) return 1;
        maxSub += arr[i];
    }
    if (maxSub < n) return 0;
    let len = arr.length;
    for (let i = 0; i < arr.length - 1; i++) {
        if (!(maxSub - arr[i] >= n)) return len;
        maxSub -= arr[i];
        len--;
    }
};
