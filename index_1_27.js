// 1. Write a function that takes in an array, and returns an object, where each element in the array is a key, and the values are the number of times each element appears in the array -

// create an object to count the elements +
  // create a for loop to access each element +
    // check if the current element is already in the object
      // if it is, increment it's value by one
      // if it isn't set it's value in the object to 1
  // return the object after the loop

// YOUR CODE HERE
//
function countElements(arr) {
   // create an empty obj to count ele
    let obj = {};
    // create for loop to access each ele
    for (let key of arr) {
        // check if ele is in obj
        if (!obj[key]) {
            obj[key] = 1
         } else {
            obj[key] ++
           }   
     }
        return obj; 
}
console.log(countElements(["apple", "orange", "apple", "banana", "apple", "orange"]))
// Example:
// { apple: 3, orange: 2, banana: 1}

// ------------------------------------------------------------------------

// 2. Write a function that takes an object and a property name (key), and returns the value of the property. If the property doesn't exist in the object return an error message

// YOUR CODE HERE

// ------------------------------------------------------------------------

//what is my input: function(obj, key)
//what is my output: return value of property or error if no value
//what are my steps: function, for loop to iterate over obj, if statement to check if property doesnt exist in obj. if true return 'error'
//


function findValueOfProperty(obj, key) {
    //check if property exists in the obj by passing it the key
        if (!obj[key]) {
   ; return obj[key];
        } else {
            return 'error'
        }
}

console.log(findValueOfProperty({}, "name"));

// 3. Given a person object, update their street to the new given street. The person object will have these properties -

/*

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  address: { 
    street: "123 Main St",
    city: "Anytown",
    zip: "12345"
  }
};

*/

// YOUR CODE HERE
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    address: { 
      street: "123 javascript st",
      city: "Anytown",
      zip: "12345"
    }
  };
console.log(person);


// ------------------------------------------------------------------------

// 4. Given the following object, preform the following tasks -
//   a. Log the desk of the second software engineer in the development department
//   b. Log the location of the head of the marketing department
//   c. Log the name of the CEO's executive assistant
//   d. Add yourself as a third software engineer to the development office
//   e. Update the name of the head of marketing to "Johann Marketer"

const companyOrganizationalStructure = {
    companyName: "TechCorp",
    CEO: {
      name: "John CEO",
      office: {
        location: "Floor 10, Building A",
        employees: {
          executiveAssistant: {
            name: "Alice Executive",
            desk: "A101",
          },
        },
      },
    },
    departments: {
      development: {
        head: {
          name: "Bob Head",
          office: {
            location: "Floor 8, Building B",
            employees: {
              softwareEngineer1: {
                name: "Charlie Engineer",
                desk: "B801",
              },
              softwareEngineer2: {
                name: "David Coder",
                desk: "B802",
              },
            },
          },
        },
      },
      marketing: {
        head: {
          name: "Eva Marketer",
          office: {
            location: "Floor 6, Building C",
            employees: {
              marketingSpecialist1: {
                name: "Frank Specialist",
                desk: "C601",
              },
              marketingSpecialist2: {
                name: "Grace Promoter",
                desk: "C602",
              },
            },
          },
        },
      }, 
    },
  };
  
  // YOUR CODE HERE
  console.log(companyOrganizationalStructure.softwareEngineer2.desk);
  
  // ------------------------------------------------------------------------
  
  // 5. Given the following variables, create a new object. the key variable should be the key and the value variable should be it's corresponding value. You have to use the variables!
  
  const key = "name";
  const value = "Roberto Robertson"
  
  // 6. Write a function that takes an object as it's only parameter and logs each property to the console. The function ONLY LOGS
  
  // YOUR CODE HERE
  
  // ------------------------------------------------------------------------
  
  // 7. Write a function that takes two objects and checks if they have the same values. HINT: use the (for.. in..) loop
  
  // YOUR CODE HERE
  
  // ------------------------------------------------------------------------
  
  
  
  
  
  
  