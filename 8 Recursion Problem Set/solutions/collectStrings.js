const collectStrings = (obj) => {
    let arr = [];
    for (key in obj) {
        if (obj[key] instanceof Object) {
            arr = [...arr, ...collectStrings(obj[key])];
        }
        if (typeof obj[key] === "string") {
            arr.push(obj[key]);
        }
    }
    return arr;
};
