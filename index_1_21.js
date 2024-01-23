// ---------------- Instructions -------------------
// 1. Copy the content of this file to a local file in your local review git repo
// 2. Solve each function
// 3. Call the function and console log the result with 2 different inputs
// 4. add/commit and push after each function



// Given an array of numbers and a given target. return the target if it's in the array or undefined if it's not
function findTarget(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return target;
        }
    }
    return undefined;
}

console.log(findTarget([1,2,3,4], 4));

//return arr.find (ele => ele === target);


// Given an array of numbers, return the first number that's bigger than 14 or undefined if no number is bigger than 14
function findNum(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 14) {
            return arr[i];
        }
    }
  return undefined;
}




// Given an array of strings, return the first string with length greater than 4 or undefined if no such string is found
function returnFirstStr(arr) {
    for (num of arr) {
        if (arr[i] > 4) {
    return arr[i];
        }
    }
    return undefined
}


// Given an array of Objects and a target id return the first object that matches the id or undefined if no such object is found
// Expected Structure of a SINGLE object - 
/*
{
 id: "Y42C_a",
 name: "Robert",
 occupation: "Chef",
 eyeColor: "green"
}
*/
function findFirstObj(arr,target) {
    for (let obj of arr) {
        if (obj.id === target) {
            return obj;
        }
    }
        return undefined;
}
//return arr.find (obj => obj.id )

let firstArray = [
    { "id": "Y42C_a", "name": "Robert", "occupation": "Chef", "eyeColor": "green" },
    { "id": "X91D_b", "name": "Alice", "occupation": "Engineer", "eyeColor": "brown" },
    { "id": "Z73E_c", "name": "John", "occupation": "Teacher", "eyeColor": "blue" },
    { "id": "P58F_d", "name": "Emily", "occupation": "Artist", "eyeColor": "hazel" },
    { "id": "R24G_e", "name": "Michael", "occupation": "Doctor", "eyeColor": "gray" },
    { "id": "L79H_f", "name": "Sophia", "occupation": "Writer", "eyeColor": "amber" },
    { "id": "M36I_g", "name": "Daniel", "occupation": "Scientist", "eyeColor": "black" },
    { "id": "K82J_h", "name": "Olivia", "occupation": "Developer", "eyeColor": "blue" },
    { "id": "N47K_i", "name": "William", "occupation": "Athlete", "eyeColor": "green" },
    { "id": "O15L_j", "name": "Emma", "occupation": "Musician", "eyeColor": "brown" }
  ];

    console.log(findFirstObj(firstArray, "Y42C_a")) 
// Given an array of objects and a target id return a new object with only the name. The structure for a single object in the array would be as the one above. The returned object would look like this - 
/*
{
 name: "Robert"
}
*/

function findObjName(arr, target) {
    let obj =  arr.find(obj => obj.id === target);
    return {
        name: obj.name
    }
}
//     for (let obj of arr) {  
//          if (obj.id === target) {  
//             return { name: obj.name };   
//          }
//     }
//         return undefined;  
//  }
 console.log(findObjName(firstArray,"Z73E_c" ))
 console.log(findObjName(firstArray, "O15L_j" ))


    

















