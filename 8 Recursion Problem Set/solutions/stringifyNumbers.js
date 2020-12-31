const stringifyNumbers = (obj) => {
    let newObj = {};
    for (key in obj) {
        if (obj[key] instanceof Object && !Array.isArray(obj[key])) {
            newObj = { ...newObj, [key]: stringifyNumbers(obj[key]) };
        } else if (typeof obj[key] === "number") {
            newObj = { ...newObj, [key]: obj[key].toString() };
        } else {
            newObj = { ...newObj, [key]: obj[key] };
        }
    }
    return newObj;
};
