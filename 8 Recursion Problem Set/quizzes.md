# Challenges / Problem Set

## Reverse

```javascript
// Write a recursive function called reverse
// which accepts a string and returns a new string in reverse.

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'
```

## isPalindrome

```javascript
// Write a recursive function called isPalindrome which returns true
// if the string passed to it is a palindrome (reads the same forward and backward).
// Otherwise it returns false.

console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
```

## someRecursive

```javascript
// Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true
// when passed to the callback. Otherwise it returns false.

console.log(someRecursive([1, 2, 3, 4], (val) => val % 2 !== 0)); // true
console.log(someRecursive([4, 6, 8, 9], (val) => val % 2 !== 0)); // true
console.log(someRecursive([4, 6, 8], (val) => val % 2 !== 0)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false
```

## flatten

```javascript
// Write a recursive function called flatten which accepts an array of arrays
// and returns a new array with all values flattened.

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1, 2, 3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1, 2, 3]
```

## capitalizeFirst

```javascript
// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.
console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana'
```

## nestedEvenSum

```javascript
// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain nested objects.

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
```

## capitalizeWords

```javascript
// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.

console.log(capitalizeWords(["i", "am", "learning", "recursion"])); // ['I', 'AM', 'LEARNING', 'RECURSION']
```

## stringifyNumvers

```javascript
// Write a function called stringifyNumbers which takes in an object and
// finds all of the values which are numbers and converts them to strings.
// Recursion would be a great way to solve this!

console.log(stringifyNumbers(obj));
```

## collectStrings

```javascript
// Write a function called collectStrings which accepts an object and
// returns an array of all the values in the object that have a typeof string.

console.log(collectStrings(obj)); // ['foo', 'bar', 'baz'])
```