// 🔹 1️⃣ Rest Operator Kya Hota Hai?

// Rest operator (...) ek special syntax hai jo:
// Multiple values ko ek single array me collect karta hai.
// Matlab 👉 jitne bhi extra arguments aayenge, unko ek array me pack kar dega.

// 🔥 3️⃣ Basic Example
// function sum(...numbers) {
//     console.log(numbers);
// }

// sum(10, 20, 30, 40);

// 👉 Output:[10, 20, 30, 40]
// ----------------------------------------------

// 🔥 4️⃣ Real Practical Example – Sum of Numbers
// function sum(...numbers) {
//     let total = 0;

//     for (let num of numbers) {
//         total += num;
//     }

//     return total;
// }
// console.log(sum(5, 10, 15));
// 👉 Output: 30
// -------------------------------------------------
// 🔥 5️⃣ Rest Operator with Other Parameters

// function studentInfo(name, age, ...marks) {
//     console.log("Name:", name);
//     console.log("Age:", age);
//     console.log("Marks:", marks);
// }

// studentInfo("Vishal", 20, 80, 90, 95);
// 👉 Output:

// Name: Vishal
// Age: 20
// Marks: [80, 90, 95]
// ----------------------------------------------------
// 🔥 6️⃣ Rest Operator in Array Destructuring

// let arr = [1, 2, 3, 4, 5];
// let [first, second, ...remaining] = arr;

// console.log(first);      // 1
// console.log(second);     // 2
// console.log(remaining);  // [3,4,5]
// ----------------------------------------------------
// 🔥 7️⃣ Rest Operator in Object Destructuring

// let student = {
//     name: "Vishal",
//     age: 20,
//     city: "Delhi",
//     course: "BCA"
// };

// let { name, ...otherDetails } = student;

// console.log(name);
// console.log(otherDetails);
// 👉 Output:
// Vishal
// { age: 20, city: "Delhi", course: "BCA" }
// ----------------------------------------------------
// 🚨 Important Rule
// ❌ Ye galat hai:
// function test(...a, b) { }  // ERROR

// ✅ Ye sahi hai:
// function test(a, ...b) { } //CORRECT
// ----------------------------------------------------
// 🔹 Rest vs Spread
// .  Rest Operator	                    .  Spread Operator
// .  Values collect karta hai	           .  Values expand karta hai
// .  Function parameter me use hota hai	.  Array/object copy me use hota hai
// .  ...nums → array banata hai	        .  ...arr → values tod deta hai
// .  [] → array banata hai	            .  {} → object banata hai   
// ==================================================================================


// ✅ Spread Operator (...)

// Tumne Rest operator padha tha — ab uska ulta bhai samajh lo 😎
// Spread operator values ko todta (expand karta) hai.

// 🔹 1️⃣ Spread Operator Kya Hota Hai?Spread operator (...) kisi bhi:
// Array ko
// Object ko
// Iterable ko


// expand (faila) deta hai individual elements me.
// -------------------------------------------------------------------------
// 🔥 2️⃣ Basic Example (Array Expand)
// let arr = [10, 20, 30];

// console.log(...arr);
// 👉 Output:
// 10 20 30
// -------------------------------------------------------------------------
// 🔥 3️⃣ Array Copy Karna (Very Important 🔥)
// let arr1 = [1, 2, 3];
// let arr2 = [...arr1];

// console.log(arr2);
// 👉 Output:[1, 2, 3]
// -------------------------------------------------------------------------
// 🔥 4️⃣ Array Merge Karna
// let a = [1, 2];
// let b = [3, 4];

// let merged = [...a, ...b];

// console.log(merged);
// 👉 Output:[1, 2, 3, 4]
// -------------------------------------------------------------------------
// 🔥 5️⃣ Function Arguments Me Use
// function sum(x, y, z) {
//     return x + y + z;
// }

// let numbers = [10, 20, 30];

// console.log(sum(...numbers));
// 👉 Output:60

// --------------------------------------------------------------------------
// 🔥 6️⃣ Object Copy
// let student = {
//     name: "Vishal",
//     age: 20
// };

// let newStudent = { ...student };

// console.log(newStudent);

// Output:{ name: "Vishal", age: 20 }
// --------------------------------------------------------------------------
// 🔥 7️⃣ Object Merge
// let obj1 = { a: 1 };
// let obj2 = { b: 2 };

// let merged = { ...obj1, ...obj2 };

// console.log(merged);

// Output:{ a: 1, b: 2 }
// --------------------------------------------------------------------------
// 🔥 8️⃣ Override Values (Very Important 🔥)
// let user = {
//     name: "Vishal",
//     age: 20
// };

// let updatedUser = {
//     ...user,
//     age: 21
// };

// console.log(updatedUser);
// 👉 Output:
// { name: "Vishal", age: 21 }
// =======================================================================
// ✅ Array destructuring

// 🔹 1️⃣ Basic Example
// let arr = [10, 20, 30];
// let [a, b, c] = arr;

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30

// 👉 Yaha:

// a = 10
// b = 20
// c = 30
// --------------------------------------------------------

// 🔥 2️⃣ Skip Values
// let arr = [1, 2, 3, 4];

// let [first, , third] = arr;

// console.log(first);  // 1
// console.log(third);  // 3

// 👉 Beech ka element skip ho gaya.
// -----------------------------------------------------------

// 🔥 3️⃣ Default Values
// let arr = [100];

// let [a, b = 50] = arr;

// console.log(a); // 100
// console.log(b); // 50

// 👉 Agar value nahi milegi to default use hoga.
// -----------------------------------------------------------

// 🔥 4️⃣ Swap Variables (Very Important 🔥)
// let x = 10;
// let y = 20;

// [x, y] = [y, x];

// console.log(x); // 20
// console.log(y); // 10

// 👉 Temporary variable ki zarurat nahi 😎
// --------------------------------------------------------------------

// 🔥 5️⃣ Rest Operator ke saath
// let arr = [1, 2, 3, 4, 5];

// let [first, second, ...rest] = arr;

// console.log(first);   // 1
// console.log(second);  // 2
// console.log(rest);    // [3,4,5]

// 👉 Baaki sab ek array me collect ho gaya.
// -------------------------------------------------------------

// 🔥 6️⃣ Nested Array Destructuring
// let arr = [1, [2, 3], 4];

// let [a, [b, c], d] = arr;

// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3
// console.log(d); // 4

// 👉 Inner array bhi destructure ho gaya.
// ----------------------------------------------------------

// 🔥 7️⃣ Function Return Value Destructuring
// function getValues() {
//     return [10, 20];
// }

// let [a, b] = getValues();

// console.log(a); // 10
// console.log(b); // 20

// 👉 Function se direct values extract.
// ---------------------------------------------------------------

// 🔥 8️⃣ Destructuring in Function Parameter
// function print([a, b]) {
//     console.log(a, b);
// }

// print([5, 10]);

// 👉 Parameter me hi destructuring ho gayi.
// ------------------------------------------------------------------

// 🔥 9️⃣ Destructuring with Less Values
// let arr = [1];

// let [a, b, c] = arr;

// console.log(a); // 1
// console.log(b); // undefined
// console.log(c); // undefined


// 👉 Extra variables undefined ho jate hain.
// -----------------------------------------------------------------

// 🔥 10️⃣ Real Practical Example
// let marks = [85, 90, 95];

// let [math, science, english] = marks;

// console.log(`Math: ${math}`);
// console.log(`Science: ${science}`);
// console.log(`English: ${english}`);
// =========================================================================

// ✅ Object destructuring
// 🔹 1️⃣ Basic Example
// let student = {
//     name: "Vishal",
//     age: 20,
//     course: "BCA"
// };

// let { name, age, course } = student;

// console.log(name);   // Vishal
// console.log(age);    // 20
// console.log(course); // BCA

// 🔎 Important:
// ✔ Variable name same hona chahiye object key ke jaisa
// ✔ Order matter nahi karta (ye array jaisa nahi hai)
// ----------------------------------------------------------------------------

// 🔥 2️⃣ Order Does NOT Matter
// let student = {
//     name: "Vishal",
//     age: 20
// };

// let { age, name } = student;

// console.log(name); // Vishal
// console.log(age);  // 20

// 👉 Yaha order change kiya, phir bhi sahi kaam kiya.
// -------------------------------------------------------------------------------

// 🔥 3️⃣ Rename Variable (Very Important 🔥)
// let student = {
//     name: "Vishal",
//     age: 20
// };

// let { name: studentName, age: studentAge } = student;

// console.log(studentName); // Vishal
// console.log(studentAge);  // 20
// -----------------------------------------------------------

// 👉 Syntax: key: newVariableName

// 🔥 4️⃣ Default Values
// let user = {
//     name: "Vishal"
// };

// let { name, age = 18 } = user;

// console.log(name); // Vishal
// console.log(age);  // 18

// 👉 Agar property nahi milegi to default value use hogi.
// ------------------------------------------------------------------------------

// 🔥 5️⃣ Rest Operator ke saath
// let student = {
//     name: "Vishal",
//     age: 20,
//     city: "Delhi",
//     course: "BCA"
// };

// let { name, ...otherDetails } = student;

// console.log(name);         // Vishal
// console.log(otherDetails); // { age:20, city:"Delhi", course:"BCA" }

// 👉 Baaki sab properties ek naye object me collect ho gayi.

// ----------------------------------------------------------------------
// 🔥 6️⃣ Nested Object Destructuring
// let student = {
//     name: "Vishal",
//     address: {
//         city: "Delhi",
//         pincode: 110001
//     }
// };

// let { name, address: { city, pincode } } = student;

// console.log(name);    // Vishal
// console.log(city);    // Delhi
// console.log(pincode); // 110001

// 👉 Inner object bhi destructure ho gaya.
// --------------------------------------------------------------------------

// 🔥 7️⃣ Function Parameter Me Object Destructuring
// function printStudent({ name, age }) {
//     console.log(name, age);
// }

// printStudent({ name: "Vishal", age: 20 });

// 👉 Direct parameter me hi destructuring.
// ------------------------------------------------------------------------------

// 🔥 8️⃣ API Data Example (Real Use Case 🔥)
// let response = {
//     status: 200,
//     data: {
//         id: 1,
//         username: "vishal123"
//     }
// };

// let { data: { id, username } } = response;

// console.log(id);       // 1
// console.log(username); // vishal123

// 👉 Real projects me bohot use hota hai.

// 🔥 9️⃣ Destructuring with Missing Property
// let obj = { a: 1 };

// let { a, b } = obj;

// console.log(a); // 1
// console.log(b); // undefined
// ===================================================================================
// ✅ Template literals
// Template literals ka use hota hai string me variable ya expression directly inject karne ke liye.

// Syntax:
// `Backticks ke andar likhte hain`

// Variable insert karne ke liye:  =>>      ${variableName}
// Expression insert karne ke liye: =>>     ${expression}


// 🔥 1️⃣ Variable Insert Karna (Most Common Use 🔥)
// let name = "Vishal";
// let age = 20;

// let message = `My name is ${name} and I am ${age} years old.`;
// console.log(message);

// 👉 Output:My name is Vishal and I am 20 years old.

// 🔥 2️⃣ Expression Use Karna (Calculation Inside String)
// let a = 10;
// let b = 20;

// console.log(`Sum is ${a + b}`);

// 👉 Output:Sum is 30
//=================================================================================


// ✅ Promise creation


🔥 3️⃣ Simple Promise Example (Most Basic)

let promise = new Promise((resolve, reject) => {
    resolve("Data mil gaya");
});

promise.then((result) => {
    console.log(result);
});

👉 Output:Data mil gaya
✔ .then() success handle karta hai
--------------------------------------------------------------

🔥 4️⃣ Reject Example

let promise = new Promise((resolve, reject) => {
    reject("Network Error");
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

👉 Output:Network Error

✔ .catch() error handle karta hai

---------------------------------------------------------------

🔥 6️⃣ Condition Based Promise
let isPaid = true;

let payment = new Promise((resolve, reject) => {

    if (isPaid) {
        resolve("Payment Successful");
    } else {
        reject("Payment Failed");
    }

});

payment
    .then(msg => console.log(msg))
    .catch(err => console.log(err));

👉 Output:Payment Successful
============================================================================


// ✅ Promise consume (then/catch)
🔥 1️⃣ Basic Success + Error Handling
let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Data Loaded ✅");
    } else {
        reject("Error Occurred ❌");
    }
});

promise
    .then(result => console.log(result))
    .catch(error => console.log(error));

✔ .then() → success handle
✔ .catch() → error handle


// ✅ setTimeout
// 1️⃣3️⃣ Map-------------------------------------------
🔥 Example 1: Square of Numbers

let numbers = [1, 2, 3, 4];

let squared = numbers.map(function(num) {
    return num * num;
});

console.log(squared);
✅ Output:[1, 4, 9, 16]


🔥 Example 2: Add 10 to Each Element
let arr = [5, 10, 15];

let result = arr.map(num => num + 10);

console.log(result);

Output:[15, 20, 25]

// 1️⃣4️⃣ Filter-------------------------------------
🔥 Example 1: Even Numbers
let numbers = [1, 2, 3, 4, 5, 6];

let even = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(even);
✅ Output:[2, 4, 6]



🔥 Example 2: Marks Greater Than 50
let marks = [40, 60, 75, 30, 90];

let passed = marks.filter(mark => mark > 50);

console.log(passed);

Output:[60, 75, 90]

// 1️⃣5️⃣ Reduce--------------------------------------------
🔥 Example 1: Sum of Array
let numbers = [10, 20, 30];

let total = numbers.reduce(function(acc, curr) {
    return acc + curr;
}, 0);

console.log(total);
✅ Output:60


🔥 Example 2: Find Maximum Value
let numbers = [5, 10, 2, 50, 25];

let max = numbers.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
});

console.log(max);

Output:

50