const merge = (arr1, arr2) => {
    arr = [];
    let p1 = 0;
    let p2 = 0;
    while (p1 < arr1.length && p2 < arr2.length) {
        arr1[p1] < arr2[p2]
            ? (arr.push(arr1[p1]), p1++)
            : (arr.push(arr2[p2]), p2++);
    }
    if (p1 == arr1.length) {
        arr.push(...arr2.slice(p2));
    } else if (p2 == arr2.length) {
        arr.push(...arr1.slice(p1));
    }
    return arr;
};
