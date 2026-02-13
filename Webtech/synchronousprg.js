//Synchronous and Asynchronous Programming in JavaScript

//Synchronous Programming(Blocking)  =>>>>>>>   ye code line by line execute hota hai, ek line complete hone ke 
// baad hi dusri line execute hoti hai, agar koi line me time lagta hai to uske baad wali 
// lines wait karti hai jab tak pehli line complete nahi ho jati

//problem execute hota hai 
//1.ui freeze ho jata hai
//app feels slow

//Asynchronous Programming  =>>>>>>   ye code line by line execute nahi hota, ek line complete hone ke 
// baad dusri line execute ho jati hai, agar koi line me time lagta hai to uske baad wali lines 
// wait nahi karti, wo apne aap execute ho jati hai jab pehli line complete ho jati hai

//Example of Synchronous Programming
// console.log("Hello");
// console.log("World");
// console.log("Welcome to JavaScript");    

//Example of Asynchronous Programming
// console.log("Hello");
// setTimeout(function(){
//     console.log("World");
// },2000);
// console.log("Welcome to JavaScript");



//--------------------------------------------------------------------------------------------

//What is Callback Function in JavaScript?

//Callback Function =>>>>>>>   ye ek function hota hai jo dusre function ke argument ke roop me
//  pass kiya jata hai,

//1.Example of Callback Function(Synchronous)

// function greet(name) {
//     console.log("Hello " + name);
// }

// function processUserInput(callback) {
//     let name = "Please enter your name.";
//     callback(name);
// }

// processUserInput(greet);



// 2.Example of Callback Function with setTimeout(Ashyns)
// function greetUser(name) {
//     console.log("Hello " + name);
// }

// setTimeout(function () {
//     greetUser("John");
// }, 2000);


// 3.Example of Callback Function with Event Listener
// function greetWorld() {
//     console.log("Hello World");
// }

// document.getElementById("myButton").addEventListener("click", greetWorld);



//-----------------------------------------------------------------------------------------------

//Promises in JavaScript

//Promise =>>>>>>>   ye ek object hota hai jo asynchronous operation ke result ko represent karta hai, 
// ye 3 states me hota hai =>>> pending, fulfilled, rejected
//1.Example of Promise

let promise = new Promise(function(resolve, reject) {
    let success = true;                          // Simulating success or failure
    if (success) {
        resolve("Operation successful!");      // Resolving the promise with a success message
    } else {
        reject("Operation failed!");          // Rejecting the promise with an error message
    }
});
promise.then(function(result) {
    console.log(result);                    // This will run if the promise is resolved successfully
}).catch(function(error) {
    console.error(error);                // This will run if the promise is rejected
});

//2.Example of Promise with setTimeout

// let promise = new Promise(function(resolve, reject) {    

//     setTimeout(function() {
//         let success = true; // Simulating success or failure
//         if (success) {
//             resolve("Operation successful!"); // Resolving the promise with a success message
//         } else {
//             reject("Operation failed!"); // Rejecting the promise with an error message
//         }
//     }, 2000); // Simulating an asynchronous operation with a delay of 2 seconds
// });

// promise.then(function(result) {
//     console.log(result); // This will run if the promise is resolved successfully
// }).catch(function(error) {
//     console.error(error); // This will run if the promise is rejected
// });

//-------------------------------------------------------------------------------------------