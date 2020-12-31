const productOfArray = (arr) => {
    if (arr == false) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
};
