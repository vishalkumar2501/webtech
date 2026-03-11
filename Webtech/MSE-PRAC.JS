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
Purpose:11111111111111111111111111111111111111111111
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
//   let total = 0;
//   for(let num of numbers){
//     total += num;
//   }
//    return total;

//   }
// console.log(sumNumbers(1, 2, 3));
// console.log(sumNumbers(10, 20));
    // STUDENT CODE ENDS HERE
//---------------------------------------------------------
/*
Purpose:2222222222222222222222222222222222222222
Accept multiple numbers using the REST operator and return the largest number

Parameters:
- ...nums (rest parameter)

Constraints:
- Must use REST operator
- Return a single number (maximum value)

Base Test Cases:
findMax(3, 7, 2, 9) → 9
findMax(10, 5) → 10
*/

// function findMax(...nums) {
//   // STUDENT CODE STARTS HERE
//     const max = Math.max(...nums);
//     return max;
//   // STUDENT CODE ENDS HERE
// }
// console.log(findMax(3, 7, 2,9));
// console.log(findMax(10, 5));
//---------------------------------------------------------

/*
Purpose:3333333333333333333333333333333333333333333333
Accept multiple numbers using the REST operator and return their average

Parameters:
- ...nums (rest parameter)

Constraints:
- Must use REST operator
- Return a single number (average value)

Base Test Cases:
averageNumbers(2, 4, 6) → 4
averageNumbers(10, 20) → 15
*/

// function averageNumbers(...nums) {
//   // STUDENT CODE STARTS HERE
//    let total = 0;
//    for(let num of nums){
//      total += num;
//    }
//     return total/nums.length;
//   // STUDENT CODE ENDS HERE
// }
// console.log(averageNumbers(2, 4, 6));
// console.log(averageNumbers(10, 20));
/*
-----------------------------------------------------------
FUNCTION 2
-----------------------------------------------------------
Purpose:111111111111111111111111111111111111
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

//----------------------------------------------------------------------
/*
Purpose:222222222222222222222222222222222222
Add new elements to an existing array using the SPREAD operator

Parameters:
- arr (Array)
- newElement1 (Number)
- newElement2 (Number)

Constraints:
- Must use spread operator
- Must return a new array
- Original array should not be modified

Base Test Cases:
addElements([1,2,3], 4, 5) → [1,2,3,4,5]
addElements([], 7, 8) → [7,8]
*/

// function addElements(arr, newElement1, newElement2) {
//   // STUDENT CODE STARTS HERE
//     return [...arr, newElement1, newElement2 ];
//   // STUDENT CODE ENDS HERE
// }
// console.log(addElements([1,2,3], 4, 5));
// console.log(addElements([], 7, 8));

//----------------------------------------------------------
/*
Purpose:3333333333333333333333333333333333333333
Create a copy of an array and add one extra element at the beginning using the SPREAD operator

Parameters:
- arr (Array)
- element (Number)

Constraints:
- Must use spread operator
- Must return a new array

Base Test Cases:
addAtStart([2,3,4], 1) → [1,2,3,4]
addAtStart([10,20], 5) → [5,10,20]
*/

// function addAtStart(arr, element) {
//   // STUDENT CODE STARTS HERE
//     return [element , ...arr];
//   // STUDENT CODE ENDS HERE
// }
// console.log(addAtStart([2,3,4], 1));
// console.log(addAtStart([10,20], 5));
/*
-----------------------------------------------------------
FUNCTION 3
-----------------------------------------------------------
Purpose:1111111111111111111
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
//     return { ...obj, [newKey] : newValue};

//   // STUDENT CODE ENDS HERE
// }
// console.log(updateObject({a:1}, "b", 2));
// console.log(updateObject({}, "x", 10));
//-----------------------------------------------------------------------
/*
Purpose:
Copy an object and update the value of an existing key using the SPREAD operator

Parameters:
- obj (Object)
- key (String)
- newValue (Any)

Constraints:
- Must NOT modify original object
- Must return a new object
- Must use spread operator

Base Test Cases:
updateValue({a:1, b:2}, "b", 5) → {a:1, b:5}
updateValue({x:10}, "x", 20) → {x:20}
*/

// function updateValue(obj, key, newValue) {
//   // STUDENT CODE STARTS HERE
//     return {...obj, [key] : newValue};
//   // STUDENT CODE ENDS HERE
// }

// console.log(updateValue({a:1, b:2}, "b", 5));
// console.log(updateValue({x:10}, "x", 20));
//------------------------------------------------------------------------
/*
Purpose:333333333333333333333333333333333333
Merge two objects using the SPREAD operator

Parameters:
- obj1 (Object)
- obj2 (Object)

Constraints:
- Must use spread operator
- Must return a new object
- Must NOT modify original objects

Base Test Cases:
mergeObjects({a:1}, {b:2}) → {a:1, b:2}
mergeObjects({x:10}, {y:20}) → {x:10, y:20}
*/

// function mergeObjects(obj1, obj2) {
//   // STUDENT CODE STARTS HERE
//     return{...obj1, ...obj2};
//   // STUDENT CODE ENDS HERE
// }

// console.log(mergeObjects({a:1}, {b:2}));
// console.log(mergeObjects({x:10}, {y:20}));
/*
-----------------------------------------------------------
FUNCTION 4
-----------------------------------------------------------
Purpose:111111111111111111111111111
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

//  function findMax(arr) {
 // STUDENT CODE STARTS HERE

//  1. return Math.max(...arr); ----------->> must be spread operator

//  2. 
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
// console.log(findMax(numberArray));
//---------------------------------------------------------
/*
Purpose:2222222222222222222
Pass array elements to a function using SPREAD operator and return their sum

Parameters:
- arr (Array of numbers)

Constraints:
- Must use spread operator
- Must return a single number (sum)

Base Test Cases:
sumArray([1,2,3]) → 6
sumArray([10,5]) → 15
*/

// function sumArray(arr) {
//   // STUDENT CODE STARTS HERE
//     let total = 0;
//     for(let b of arr){
//         total += b;
//     }
//     return total;
//   // STUDENT CODE ENDS HERE
// }

// console.log(sumArray([1,2,3]));
// console.log(sumArray([10,5]));
//---------------------------------------------------------
/*
Purpose:
Insert a new element in the middle of an array using the SPREAD operator

Parameters:
- arr (Array)
- element (Number)

Constraints:
- Must use spread operator
- Must return a new array
- Original array should not be modified

Base Test Cases:
insertMiddle([1,2,4], 3) → [1,2,3,4]
insertMiddle([5,7], 6) → [5,6,7]
*/

// function insertMiddle(arr, element) {
//   // STUDENT CODE STARTS HERE
//     const middleIndex = Math.floor(arr.length / 2);
//     return [...arr.slice(0, middleIndex), element, ...arr.slice(middleIndex)];

//   // STUDENT CODE ENDS HERE
// }

// console.log(insertMiddle([1,2,4],3));
// console.log(insertMiddle([5,7],6));
//-------------------------------------------------------------
/*
Purpose:
Create a new array without the first element using the SPREAD operator

Parameters:
- arr (Array)

Constraints:
- Must use spread operator
- Must return a new array

Base Test Cases:
removeFirst([1,2,3]) → [2,3]
removeFirst([10,20]) → [20]
*/

// function removeFirst(arr) {
//   // STUDENT CODE STARTS HERE
//       const [ , ...rest ]=  arr;
//        return rest;
//   // STUDENT CODE ENDS HERE
// }

// console.log(removeFirst([1,2,3]));
// console.log(removeFirst([10,20]));
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

//----------------------------------------------------------
/*
Purpose:
Swap the first two elements of an array using ARRAY DESTRUCTURING

Parameters:
- arr (Array)

Constraints:
- Must use array destructuring
- Must return a new array

Base Test Cases:
swapFirstTwo([1,2,3]) → [2,1,3]
swapFirstTwo([5,10]) → [10,5]
*/

// function swapFirstTwo(arr) {
//   // STUDENT CODE STARTS HERE
//     const [first,second,...rest] = arr;

//     return[second, first, ...rest];
//   // STUDENT CODE ENDS HERE
// }

// console.log(swapFirstTwo([1,2,3]));
// console.log(swapFirstTwo([5,10]));

//-----------------------------------------------
/*
Purpose:
Use ARRAY DESTRUCTURING to extract the first two elements

Parameters:
- arr (Array)

Constraints:
- Must use destructuring
- Return an object: { first, second }

Base Test Cases:
getFirstTwo([10,20,30]) → {first:10, second:20}
getFirstTwo([5,15]) → {first:5, second:15}
*/

// function getFirstTwo(arr) {
//   // STUDENT CODE STARTS HERE
//       const[first,second,...rest] = arr;
//       return {first, second};
//   // STUDENT CODE ENDS HERE
// }

// console.log(getFirstTwo([10,20,30]));
// console.log(getFirstTwo([5,15]));

//---------------------------------------------------
/*
Purpose:
Use ARRAY DESTRUCTURING to extract the first element and the remaining elements

Parameters:
- arr (Array)

Constraints:
- Must use destructuring with REST operator
- Return an object: { first, remaining }

Base Test Cases:
splitArray([1,2,3,4]) → {first:1, remaining:[2,3,4]}
splitArray([10]) → {first:10, remaining:[]}
*/

// function splitArray(arr) {
//   // STUDENT CODE STARTS HERE
//     const [first, ...remaining] = arr;
//     return {first, remaining};

//   // STUDENT CODE ENDS HERE
// }

// console.log(splitArray([1,2,3,4]));
// console.log(splitArray([10]));
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
//     setTimeout(()=>{
//         resolve(message);
//     },2000);

//    });

//   //STUDENT CODE ENDS HERE
// }
// console.log(createSuccessPromise("Done"));
//------------------------------------------------------------
 /*
Purpose:
Create a PROMISE that rejects after 3 seconds

Parameters:
- errorMessage (String)

Constraints:
- Must return a Promise
- Use setTimeout
- Reject after 3000ms

Base Test Cases:
createErrorPromise("Failed")
→ Rejects with "Failed"
*/

// function createErrorPromise(errorMessage) {
//   // STUDENT CODE STARTS HERE
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{ 
//           reject(errorMessage);
//     }, 3000);
//   });
//   // STUDENT CODE ENDS HERE
// }

// createErrorPromise("Failed")
//   .then(res => console.log(res))
//   .catch(err => console.log(err));
//---------------------------------------------
/*
Purpose:
Create a PROMISE that resolves if number is even otherwise rejects

Parameters:
- num (Number)

Constraints:
- Must return a Promise
- Use resolve and reject

Base Test Cases:
checkEven(4) → Resolves with "Even Number"
checkEven(5) → Rejects with "Odd Number"
*/

// function checkEven(num) {
//   // STUDENT CODE STARTS HERE
//    return new Promise((resolve, reject)=>{ 
//           if(num %2 == 0) {
//             resolve("Even Number");
//           } else {
//             reject("Odd Number");
//           }
//    });
//   // STUDENT CODE ENDS HERE
// }

// checkEven(4)
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// checkEven(5)
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

//---------------------------------------------------------

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
