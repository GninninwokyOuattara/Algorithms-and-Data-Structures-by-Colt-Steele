# Challenges

## Frequency Counter

### sameFrequency

```javascript
// Write a function called sameFrequency
// Given two positive integers, find out if the two
// numbers have the same frequency of digits.

// Your solution MUST have the following complexities:
// Time: O(N)

sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false
```

### areThereDuplicate

```javascript
// Implement a function called areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// Restrictions: Time Complexity - O(n), Space Complexity - O(n)

areThereDuplicates(1, 2, 3); // false
areThereDuplicates("a", "b", "c", "a"); // true
```

## Multiple pointers

### averagePair

```javascript
// Write a function called averagePair. Given a sorted array of integers
// and a target average, determine if there is a pair of values in the array
// where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// Bonus Constraints:
// Time Complexity: O(N)
// Space Complexity: O(1)

averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false
```

### isSubsequence

```javascript
// Write a function called isSubsequence which takes in two strings and checks
// whether the characters in the first string form a subsequence of the characters
// in the second string. In other words, the function should check whether the characters
// in the first string appear somewhere in the second string, without their order changing.

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

isSubsequence('sing', 'sting')); // true
isSubsequence('abc', 'abracadabra')); // true
isSubsequence('abc', 'acb')); // false (order matters)
isSubsequence('', 'cat')); // true
```

## Sliding Window

### maxSubarraySum

```javascript
// Given an array of integers and a number, write a function called maxSubarraySum,
// which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array.
// In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
// maxSubarraySum([100,200,300,400], 2) // 700

// Constraints:
// Time Complexity - O(N)
// Space Complexity - O(1)

maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
maxSubarraySum([2, 3], 3); // null
```

### minSubarrayLen

```javascript
// Write a function called minSubArrayLen which accepts two parameters -
// an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray
// of which the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.

// Time Complexity - O(n)
// Space Complexity - O(1)

minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> because [62] is greater than 52
```

### findLongestSubstring

```javascript
// Write a function called findLongestSubstring, which accepts a string and
// returns the length of the longest substring with all distinct characters.

// Time Complexity - O(n^2)

findLongestSubstring(""); // 0
findLongestSubstring("rithmschool"); // 7 - rithmsc
findLongestSubstring("thisisawesome"); // 6 - awesome
```
