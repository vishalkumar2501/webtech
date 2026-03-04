/*
===========================================================
ES6 Assignment - Moodle Template
Course: Web Technology / JavaScript ES6
Instructions:
- DO NOT change function names
- DO NOT modify driver function
- Implement logic only inside the marked sections
- Each function carries 1 mark
===========================================================
*/

/*
-----------------------------------------------------------
DUMMY DATA (You may use these for testing)
-----------------------------------------------------------
*/

// const numberArray = [10, 20, 30, 40];
// const student = {
//   name: "Aarav",
//   age: 21,
//   course: "B.Tech"
// };

// const extraInfo = {
//   city: "Delhi",
//   college: "KIET"
// };

/*
-----------------------------------------------------------
FUNCTION 1
-----------------------------------------------------------
Purpose:
Accept multiple numbers using the REST operator and return their sum

Parameters:
- ...nums (rest parameter)

Constraints:
- Must use REST operator
- Return a single number (sum)

Base Test Cases:
sumNumbers(1, 2, 3) → 6
sumNumbers(10, 20) → 30
*/

// function sumNumbers(...numbers) {
//   // STUDENT CODE STARTS HERE
//     let sum=0;
//     for(let num of numbers){
//         sum+=num;
//     }
//     return sum;

//   }
// console.log(sumNumbers(1, 2, 3));
// console.log(sumNumbers(10, 20));
//     // STUDENT CODE ENDS HERE
/*
-----------------------------------------------------------
FUNCTION 2
-----------------------------------------------------------
Purpose:
Merge two arrays using the SPREAD operator

Parameters:
- arr1 (Array)
- arr2 (Array)

Constraints:
- Must use spread operator
- Must return a new array

Base Test Cases:
mergeArrays([1,2], [3,4]) → [1,2,3,4]
mergeArrays([], [5]) → [5]
*/

//  function mergeArrays(arr1, arr2) {
// //   // STUDENT CODE STARTS HERE
//     return[...arr1, ...arr2];

// //   // STUDENT CODE ENDS HERE
//  }
// console.log(mergeArrays([1,2], [3,4]));
// console.log(mergeArrays([], [5]));
/*
-----------------------------------------------------------
FUNCTION 3
-----------------------------------------------------------
Purpose:
Copy and update an object using the SPREAD operator

Parameters:
- obj (Object)
- newKey (String)
- newValue (Any)

Constraints:
- Must NOT modify original object
- Must return a new object

Base Test Cases:
updateObject({a:1}, "b", 2) → {a:1, b:2}
updateObject({}, "x", 10) → {x:10}
*/

// function updateObject(obj, newKey, newValue) {
//   // STUDENT CODE STARTS HERE
//     return{...obj, [newKey]: newValue};

//   // STUDENT CODE ENDS HERE
// }
// console.log(updateObject({a:1}, "b", 2));
// console.log(updateObject({}, "x", 10));
/*
-----------------------------------------------------------
FUNCTION 4
-----------------------------------------------------------
Purpose:
Demonstrate passing array elements as function arguments using SPREAD

Parameters:
- arr (Array of numbers)

Constraints:
- Must use spread operator
- Must return the maximum number

Base Test Cases:
findMax([1,5,3]) → 5
findMax([10,2]) → 10
*/

// function findMax(arr) {
//  // STUDENT CODE STARTS HERE

    //1. return Math.max(...arr); ----------->> must be spread operator

 // 2. 
//     let max = arr[0];
//     for(let i =0; i<arr.length; i++){
//         if(arr[i]> max){
//             max=arr[i];
//         }
//     }
//     return max;
// //   // STUDENT CODE ENDS HERE
// }
// console.log(findMax([1,5,3]));
// console.log(findMax([10,2]));
//console.log(findMax(numberArray));

/*
-----------------------------------------------------------
FUNCTION 5
-----------------------------------------------------------
Purpose:
Use ARRAY DESTRUCTURING to extract first and last elements

Parameters:
- arr (Array)

Constraints:
- Must use destructuring
- Return an object: { first, last }

Base Test Cases:
extractElements([10,20,30]) → {first:10, last:30}
extractElements([5]) → {first:5, last:5}
*/

// function extractElements(arr) {
//   // STUDENT CODE STARTS HERE
//   const [first, ...rest] = arr;
//   const [last = first ] = rest.slice(-1);
//   return {first, last};

//   // STUDENT CODE ENDS HERE
// }
// console.log(extractElements([10,20,30]));
// console.log(extractElements([5]));
/*
-----------------------------------------------------------
FUNCTION 6
-----------------------------------------------------------
Purpose:
Use OBJECT DESTRUCTURING and TEMPLATE LITERALS

Parameters:
- obj (Object with name and course)

Constraints:
- Must use destructuring
- Must use template literals

Return Format:
"Student <name> is enrolled in <course>"

Base Test Cases:
formatStudent({name:"Aarav", course:"B.Tech"})
→ "Student Aarav is enrolled in B.Tech"
*/

// function formatStudent(obj) {
//   // STUDENT CODE STARTS HERE
//     const {name, course} = obj;
//     return `Student ${name} is enrolled in ${course}`;

//   // STUDENT CODE ENDS HERE
// }
// console.log(formatStudent({name:"Aarav", course:"B.Tech"}));
/*
-----------------------------------------------------------
FUNCTION 7
-----------------------------------------------------------
Purpose:
Demonstrate DEFAULT PARAMETERS

Parameters:
- a (Number, default = 5)
- b (Number, default = 10)

Constraints:
- Must use default values
- Return sum of a and b

Base Test Cases:
addDefault() → 15
addDefault(10, 5) → 15
*/

//  function addDefault(a = 5, b = 10) { 
//  // STUDENT CODE STARTS HERE
//     return a+b;

//   //STUDENT CODE ENDS HERE
// }
// console.log(addDefault());
// console.log(addDefault(10, 5));

/*
-----------------------------------------------------------
FUNCTION 8
-----------------------------------------------------------
Purpose:
Create a PROMISE that resolves after 2 seconds

Parameters:
- message (String)

Constraints:
- Must return a Promise
- Use setTimeout
- Resolve after 2000ms

Base Test Cases:
createSuccessPromise("Done")
→ Resolves with "Done"
*/

// function createSuccessPromise(message) {
//   //STUDENT CODE STARTS HERE
//    return new Promise((resolve, reject) =>{
//     setTimeout((message)=>{
//         resolve(message);
//     },2000);

//    });

//   //STUDENT CODE ENDS HERE
// }
// console.log(createSuccessPromise("Done"));


/*
-----------------------------------------------------------
FUNCTION 9
-----------------------------------------------------------
Purpose:
Create a PROMISE that rejects if condition fails

Parameters:
- condition (Boolean)

Constraints:
- If true → resolve("Success")
- If false → reject("Failed")

Base Test Cases:
createConditionalPromise(true) → Resolve
createConditionalPromise(false) → Reject
*/

// function createConditionalPromise(condition) {
// //   STUDENT CODE STARTS HERE
//   return new Promise((resolve,reject)=>{
//     if(condition){
//         resolve("Success");
//     } else{
//         reject("Failed");
//     }
//   });


// //   STUDENT CODE ENDS HERE
// } 
//     createConditionalPromise(true)
//         .then(result=> console.log(result))
//         .catch(error => console.log(error));
//     createConditionalPromise(false)
//         .then(result => console.log(result))
//         .catch(error => console.log(error));


/*
-----------------------------------------------------------
FUNCTION 10
-----------------------------------------------------------
Purpose:
Consume a Promise using THEN and CATCH

Parameters:
- promise (Promise)

Constraints:
- Must use then() and catch()
- Print success or error message using console.log()

Base Test Cases:
handlePromise(createConditionalPromise(true))
→ "Success"

handlePromise(createConditionalPromise(false))
→ "Failed"
*/

// function createConditionalPromise(condition) {
//   return new Promise((resolve, reject) => {
//     if (condition) {
//       resolve("Success");
//     } else {
//       reject("Failed");
//     }   
//   });
// }
// function handlePromise(promise) {
//   // STUDENT CODE STARTS HERE
//   promise
//        .then(result => console.log(result))   
//        .catch(error => console.log(error));



//   // STUDENT CODE ENDS HERE
// }
//     handlePromise(createConditionalPromise(true));
//     handlePromise(createConditionalPromise(false));

/*
-----------------------------------------------------------
FUNCTION 11 (DRIVER FUNCTION)
-----------------------------------------------------------
Purpose:
Test all student functions
DO NOT MODIFY THIS FUNCTION
-----------------------------------------------------------
*/

// function driver() {
//   console.log("---- ES6 ASSIGNMENT DRIVER START ----");

//   console.log("Sum:", sumNumbers(1, 2, 3));


//   console.log("Merged:", mergeArrays([1, 2], [3, 4]));
//   console.log("Updated Object:", updateObject(student, "city", "Delhi"));
//   console.log("Max Value:", findMax(numberArray));
//   console.log("Extracted:", extractElements(numberArray));
//   console.log("Formatted Student:", formatStudent(student));
//   console.log("Default Add:", addDefault());

//   const successPromise = createSuccessPromise("Operation Successful");
//   const conditionPromise = createConditionalPromise(false);

//   handlePromise(successPromise);
//   handlePromise(conditionPromise);

//   console.log("---- ES6 ASSIGNMENT DRIVER END ----");
// }

// /*
// -----------------------------------------------------------
// RUN DRIVER
// -----------------------------------------------------------
// */

// driver();
// driver();
