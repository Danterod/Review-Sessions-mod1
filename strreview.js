// 1.----------------------------------
// Write a function that takes in a string and returns a new string with every word capitalized. Write your own examples to call the function with.
function capitalizeWords(str) {
    let words = str.split(" ");
    let capitalizedWords = [];
    for (let word of words) {
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        
        capitalizedWords.push(capitalizedWord);
    }

    return capitalizedWords.join(" ");
}


// 2.----------------------------------
// Write a function that takes in an object and returns a formatted greeting.
// This is the format of the object - 
function formatGreeting(obj) {
    let greeting = "hello" + obj.firstName + " " + obj.lastName + "have a great day at your job as a" + obj.occupation;
    return greeting;
}

const john = {
  firstName: "John",
  lastName: "Klaus",
  occupation: "Carpenter"
}


const rebecca = {
  firstName: "Rebecca",
  lastName: "Cohen",
  occupation: "Teacher"
}

console.log(formatGreeting(john) === "Hello John Klaus, have a great day at your job as a Carpenter")

console.log(formatGreeting(rebecca) === "Hello Rebecca Cohen, have a great day at your job as a Teacher")

// 3.----------------------------------
// Write a function that takes an array of objects and a targetId and returns a formatted string. Each object in the array will have the same structure as the objects from the previous question plus an id. Use chatGPT to create an array of 10 such objects.
function formatString(arr, targetId){
    for (let obj of arr) {
        if (obj.id === targetId) {   
            let greeting =  ` Hello ${obj.id} ${obj.firstName}  ${obj.lastName}, have a great day at your job as a ${obj.occupation};`
             return greeting;
        }
    }
      return undefined;
}
// Example Object
// {
//   id: "Tfjso_4M"
//   firstName: "John",
//   lastName: "Klaus",
//   occupation: "Carpenter"
// }

const people = [
  { id: "Tfjso_4M", firstName: "John", lastName: "Klaus", occupation: "Carpenter" },
  { id: "Xkls2_8Z", firstName: "Emily", lastName: "Nolan", occupation: "Engineer" },
  { id: "Nmsl1_3P", firstName: "Alex", lastName: "Johnson", occupation: "Teacher" },
  { id: "Rtzo5_1K", firstName: "Olivia", lastName: "Brown", occupation: "Doctor" },
  { id: "Uizn8_2L", firstName: "William", lastName: "Davis", occupation: "Chef" },
  { id: "Plkq9_7G", firstName: "Sophia", lastName: "Miller", occupation: "Artist" },
  { id: "Jklt5_6H", firstName: "James", lastName: "Wilson", occupation: "Musician" },
  { id: "Vbnp4_3Q", firstName: "Charlotte", lastName: "Taylor", occupation: "Architect" },
]

console.log(formatString(people, "Tfjso_4M"));























