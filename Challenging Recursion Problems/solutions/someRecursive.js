//With Helper
const someRecursive = (arr, callback) => {
    let out = false;
    const check = (arr) => {
        if (!arr.length) return;
        if (!callback(arr[0])) return check(arr.slice(1));
        out = true;
        return;
    };
    check(arr);
    return out;
};

//Pure recursive
const someRecursive = (arr, callback) => {
    if (!arr.length) return false;
    if (!callback(arr[0])) return someRecursive(arr.slice(1), callback);
    return true;
};
