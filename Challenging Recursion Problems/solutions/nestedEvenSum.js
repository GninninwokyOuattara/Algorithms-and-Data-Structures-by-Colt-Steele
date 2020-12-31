const nestedEvenSum = (obj) => {
    let sum = 0;
    for (key in obj) {
        if (obj[key] instanceof Object) {
            sum = sum + nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
            sum = sum + obj[key];
        }
    }
    return sum;
};
