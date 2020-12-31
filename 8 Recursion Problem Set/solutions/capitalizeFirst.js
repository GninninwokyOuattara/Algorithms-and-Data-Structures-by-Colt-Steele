// // with Helper
// const capitalizeFirst = (arr) => {
//     let newArr = [];
//     const walk = (arr) => {
//         if (!arr.length) return;
//         newArr.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
//         return crawl(arr.slice(1));
//     };
//     walk(arr);
//     return newArr;
// };

// Without Helper
const capitalizeFirst = (arr) => {
    let newArr = [];
    if (arr.length) {
        newArr = [
            arr[0].charAt(0).toUpperCase() + arr[0].slice(1),
            ...capitalizeFirst(arr.slice(1)),
        ];
    }
    return newArr;
};

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana'
