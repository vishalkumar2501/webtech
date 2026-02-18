//kya hota hai async and await ?

// Ye dono JavaScript me asynchronous code ko simple tareeke se likhne ke liye use hote hain.
// Matlab:
// 👉 Jab koi kaam time leta hai (jaise API call, database se data lana, file read karna), tab hum async–await use karte hain.

console.log("Start");

setTimeout(() => {
  console.log("Data aa gaya");
}, 2000);

console.log("End");
// Output:

// Start
// End
// Data aa gaya

// Jab kisi function ke aage async lagate hain:

// async function getData() {
//   return "Hello";
// }


// Toh wo function Promise return karta hai.
// Behind the scenes ye aise hota hai:

// function getData() {
//   return Promise.resolve("Hello");
// }

//-----------------------------------------------------------------------
// await kya karta hai?

// await ka matlab:
// 👉 "Ruk jao jab tak Promise resolve na ho jaye"
// Example:

// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data mil gaya");
//     }, 2000);
//   });
// }

// async function getData() {
//   let result = await fetchData();
//   console.log(result);
// }

// getData();

// Output (2 sec baad):
// Data mil gaya