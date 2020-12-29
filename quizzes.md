# Frequency Counter

## Anagram counter

Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase or name form by rearranging the letter of another such as _Cinema_ formed from _Iceman_

```javascript
validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false
validAnagram("awesome", "awesom"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true
```

# Multiple Pointers

## countUniqueValues

implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

```javascript
countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
```

# Sliding Windows

## maxSubarraySum

Write a function called maxSubarraySuù which accets an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

```javascript
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); //10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); //10
maxSubarraySum([4, 2, 1, 6], 1); //10
maxSubarraySum([4, 2, 1, 6, 2], 4); //10
maxSubarraySum([], 4); // null
```
