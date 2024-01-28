// Acc Pattern

// Iterative Native Array Methods

// For each of the following exercises, 
// 1. write them using a for loop first
// 2. comment out the accumulator pattern solution and write it using a native array method
// 3. call the function and console.log the result

// 1. Write a function that takes in an array of strings and returns a new array where each string is replaced by it's length
// ["hello", "world"] => [5, 5] 

// function getStringLength(str) {
//     const newStr = [];
//     for (let ele of str) {
// newStr.push(ele.length)
//     }
//     return newStr;
// }
// console.log(getStringLength(str));
function getStringLength(str) {
return str.map(ele => ele.length) 
}  

// 2. Write a function that takes an array of strings and returns an array of strings longer than 5 characters (spaces count)

// function getLengthlongerthan5(arr) {
// const five = [];
//     for (let str of arr ) {
//     if str.length > 5 {
//         five.push(str);
//     return five;
//     } 
//  }
// }

// console.log(getLengthlongerthan5("Hello" "Ari" "and" "Dante"))

function getLengthlongerthan5(arr) {
    return arr.filter(str => str.length > 5);
}
//console.log(getLengthlongerthan5(["Hello" "Ari" "and" "Dante"]))



// 3. Write a function that takes an array of strings, and returns a new array of the lengths of strings longer than 5 characters

function stringsLongerThanFive(stringsArray) {
    const newArr = [];

    for (const string of stringsArray) {
        if (string.length > 5) {
            newArr.push(string.length);
        }
    }
 return newArr;
}
console.log(stringsLongerThanFive("helloooooo", "world", "!"))

//return arr.filter((str) =? str.length > 5).map((str) => str.length)

// 4. Write a function that takes an array of numbers and returns the sum of all even numebrs
function sumOfEvenNum(arr){
    let sum = 0;
    for (let num of arr) {
        if (num % 2 === 0){
            sum += num;
        }
      }
      return sum;
}


const sumOfEvenNum = arr.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0)

// 5. Write a function that takes an array of numbers and returns the min num
function minNum(arr) {
    // Initialize the min variable with the lowest value possible
    let min = - infinity;
// Loop through the array
    for (let num of arr) {
        // Check if the array is empty
    if (arr.length === 0) {
        return "Array is empty";
    }
 // If the current number is smaller than the current min, update min
        if (num < min) {
            min = num;
        }
    }
    return min;
}
 console.log(minNum([10,24,200,33,55]));



// 6. Write a function that takes in a string and returns the character that appears the most times (only letters count)





















