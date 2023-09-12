// function addNumbers(num1, num2) {
//   return num1 + num2;
// }

//
// const addNumbers = (num1, num2) => num1 + num2;

// problem 2

// function factorial(n) {
//   let result = 1;

//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }
// console.log(5);

// problem 3

// function reverseString(str) {
//   let reverseStr = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseString += str.charAt(i);
//   }
//   return reverseStr;
// }

// console.log(reverseString("Hello"));

// problem 4
// function findLargestNumber(arr) {
//   let largest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }

// console.log(findLargestNumber([5, 2, 22, 44, 111, 123]));

//problem 5
function reverseString(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str.charAt(i);
  }
  return reversedStr;
}
function isPalindrome(str) {
  return str === reverseString(str);
}
console.log(isPalindrome("racecar"));
