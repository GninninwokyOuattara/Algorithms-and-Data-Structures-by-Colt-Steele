const flatten = (arr) => {
    let newArr = [];
    for (value of arr) {
        if (value instanceof Array) {
            newArr = [...newArr, ...flatten(value)];
        } else {
            newArr.push(value);
        }
    }
    return newArr;
};
