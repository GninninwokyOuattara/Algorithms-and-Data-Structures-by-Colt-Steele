const capitalizeWords = (arr) => {
    let newArr = [];
    if (arr.length) {
        newArr.push(arr[0].toUpperCase());
        newArr = [...newArr, ...capitalizeWords(arr.slice(1))];
    }
    return newArr;
};
