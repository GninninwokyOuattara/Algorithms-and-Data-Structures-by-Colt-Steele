//Slow approach !Slide Widow
// const maxSubarraySum = (arr, num) => {
//     if (num > arr.length) {
//         return null;
//     }

//     var max = -Infinity;
//     for (let i = 0; i < arr.length - num + 1; i++) {
//         temp = 0;
//         for (let j = 0; j < num; j++) {
//             temps += arr[i + j];
//         }
//         if (temps > max) {
//             max = temp;
//         }
//     }
//     return max;
// };

//Sliding Window Approach
const maxSubarraySum = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    //Build first sum with a subset of arr of length num
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    //It becomes the first sum naturally
    tempSum = maxSum;
    //Now we slide thru the array, starting from num to last index
    for (let i = num; i < arr.length; i++) {
        //arr[i - num] -> number a the head of previous subset
        //arr[i] -> number a the tail of current subset
        //Basically, we remove the previous head and add tail from array to
        // directly get a new sum, without having to loop thru everything.
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
};

//TEST CASES
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); //10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); //10
maxSubarraySum([4, 2, 1, 6], 1); //10
maxSubarraySum([4, 2, 1, 6, 2], 4); //10
maxSubarraySum([], 4); // null
