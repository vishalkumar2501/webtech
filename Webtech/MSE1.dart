// 🧱 1️⃣ Variables & Data Types
// ✅ 1. int (Integer)
// void main() {
//   int age = 20;
//   print(age);
// }
// 🔹 Explanation

// int whole numbers store karta hai.
// Decimal allowed nahi hai.

// 🧠 Real Life
// Tumhari age = 20 (decimal nahi hota)


// ✅ 2. double (Decimal Number)
// void main() {
//   double price = 99.99;
//   print(price);
// }
// 🔹 Explanation

// Decimal number store karta hai.

// 🧠 Real Life
// Mobile ka price = 15999.50


// ✅ 3. String (Text)
// void main() {
//   String name = "Vishal";
//   print(name);
// }
// 🔹 Explanation

// Text store karta hai.
// Double ya single quotes dono use kar sakte ho.


// ✅ 4. bool (True / False)
// void main() {
//   bool isLoggedIn = true;
//   print(isLoggedIn);
// }
// 🔹 Explanation

// Sirf 2 value:
// true
// false

// ✅ 5. dynamic (Type Change Ho Sakta Hai)
// void main() {
//   dynamic value = 10;
//   print(value);

//   value = "Hello";
//   print(value);
// }
// 🔹 Explanation

// Type change ho sakta hai.
// Risky hota hai.
// ⚠ Interview Point
// Production me avoid karo.

// ✅ 6. var
// void main() {
//   var city = "Delhi";
//   print(city);
// }
// 🔹 Explanation

// Dart khud type detect karta hai.

// Type change nahi kar sakte baad me.

// ❌ Ye galat hai:

// var city = "Delhi";
// city = 10;  // Error

// ✅ 7. final vs const
// 🔹 final

// Runtime me value mil sakti hai.

// void main() {
//   final time = DateTime.now();
//   print(time);
// }
// 🔹 const

// Compile time pe fix hota hai.

// void main() {
//   const pi = 3.14;
//   print(pi);
// }
// 🎯 Difference
// final	const
// Runtime pe assign	Compile time pe assign
// Flexible	Fixed forever
// 🧮 2️⃣ Operators
// ✅ Arithmetic Operators
// void main() {
//   int a = 10;
//   int b = 5;

//   print(a + b);
//   print(a - b);
//   print(a * b);
//   print(a / b);
// }
// ✅ Comparison Operators
// void main() {
//   int x = 10;
//   int y = 20;

//   print(x == y);
//   print(x != y);
//   print(x > y);
//   print(x < y);
// }
// ✅ Logical Operators
// void main() {
//   bool isStudent = true;
//   bool hasID = false;

//   print(isStudent && hasID);
//   print(isStudent || hasID);
// }
// 🔹 && → Dono true hone chahiye
// 🔹 || → Ek bhi true ho to true
// 🛡 3️⃣ Type System & Null Safety

// ⚠ Dart null-safe language hai.

// ✅ Non-nullable
// String name = "Vishal";

// Isme null assign nahi kar sakte.

// ❌

// name = null; // Error
// ✅ Nullable (?)
// String? name;
// name = null; // Allowed
// 🔹 ? ka matlab

// Value ho bhi sakti hai ya null bhi ho sakti hai.

// ✅ Null Check Operator (!)
// String? name = "Vishal";
// print(name!.length);
// 🔹 ! ka matlab

// Mujhe pata hai ye null nahi hai.

// ⚠ Agar null hua to crash ho jayega.

// ✅ Safe Call Operator (?.)
// String? name;
// print(name?.length);
// 🔹 Agar null hai to crash nahi karega.
// 🎯 Ab Sab Ek Sath Example
// void main() {
//   String? name;
//   int age = 20;
//   double salary = 50000.50;
//   bool isWorking = true;

//   if (isWorking && age > 18) {
//     print("Eligible");
//   }

//   print(name?.length);
// }

// ✅ Function Syntax
// returnType functionName(parameters) {
//   // body
//   return value;
// }
// ✅ Example 1 – Simple Function
// int add(int a, int b) {
//   return a + b;
// }

// void main() {
//   print(add(5, 3));
// }
// 🔍 Breakdown

// int → return type

// add → function name

// (int a, int b) → parameters

// return → output bhejna

// ✅ if-else
// void checkAge(int age) {
//   if (age >= 18) {
//     print("Adult");
//   } else {
//     print("Minor");
//   }
// }
// 🎯 Boolean logic use ho raha hai:

// age >= 18 → true/false

// ✅ switch Case
// void checkGrade(String grade) {
//   switch (grade) {
//     case "A":
//       print("Excellent");
//       break;
//     case "B":
//       print("Good");
//       break;
//     default:
//       print("Invalid");
//   }
// }
// ✅ String Comparison
// void checkUser(String name) {
//   if (name == "Vishal") {
//     print("Welcome Vishal");
//   }
// }

// 👉 Dart me string comparison == se hota hai.

// ✅ Division by Zero Check (IMPORTANT)
// double divide(int a, int b) {
//   if (b == 0) {
//     print("Error: Division by zero");
//     return 0;
//   }
//   return a / b;
// }
// 🎯 Assignment Style – calculate()
// double calculate(double a, double b, String operator) {
//   if (operator == "+") {
//     return a + b;
//   } else if (operator == "-") {
//     return a - b;
//   } else if (operator == "*") {
//     return a * b;
//   } else if (operator == "/") {
//     if (b == 0) {
//       print("Error: Division by zero");
//       return 0;
//     }
//     return a / b;
//   } else {
//     print("Invalid Operator");
//     return 0;
//   }
// }

// 🔥 Ye real assignment-level code hai.

// ✅ 2️⃣ Lists & Loops
// 🔹 List Kya Hoti Hai?

// List = Ek box jisme multiple values store kar sakte ho.

// ✅ List Declaration
// List<String> tasks = [];
// ✅ .add()
// tasks.add("Study Dart");
// ✅ .remove()
// tasks.remove("Study Dart");
// ✅ .length
// print(tasks.length);
// ✅ for Loop
// for (int i = 0; i < tasks.length; i++) {
//   print(tasks[i]);
// }
// ✅ for-in Loop
// for (var task in tasks) {
//   print(task);
// }
// 🎯 Assignment Style – Task Manager
// List<String> tasks = [];

// void addTask(String task) {
//   tasks.add(task);
// }

// void removeTask(String task) {
//   tasks.remove(task);
// }

// void viewTasks() {
//   for (var task in tasks) {
//     print(task);
//   }
// }

// int countTasks() {
//   return tasks.length;
// }

// 🔥 Ye pura mini project hai.

// ✅ 3️⃣ Maps in Dart
// 🔹 Map Kya Hota Hai?

// Map = Key → Value pair

// Jaise:
// Name → Vishal
// Age → 20

// ✅ Map Declaration
// Map<String, dynamic> student = {};
// ✅ Add Values
// student["name"] = "Vishal";
// student["age"] = 20;
// ✅ Access Value
// print(student["name"]);
// ✅ Type Casting (IMPORTANT)
// int age = student["age"] as int;
// 🎯 Assignment Style – createStudent()
// Map<String, dynamic> createStudent(String name, int age, double marks) {
//   return {
//     "name": name,
//     "age": age,
//     "marks": marks
//   };
// }

// void main() {
//   var student = createStudent("Vishal", 20, 89.5);
//   print(student);
// }

// ✅ 4️⃣ OOP (Most Important 🔥🔥)
// /✔ 1. Class Syntax

// Class ek blueprint hoti hai.

// class Person {
//   String name;
//   int age;

//   void displayRole() {
//     print("I am a person");
//   }
// }
// Breakdown:

// class Person → Blueprint

// String name → properties

// displayRole() → method (behavior)

// ✔ 2. Constructor

// Constructor object create hote hi run hota hai.

// class Person {
//   String name;
//   int age;

//   Person(this.name, this.age);
// }
// this ka matlab?

// Ye current object ko refer karta hai.

// Internally:

// Person(String name, int age) {
//   this.name = name;
//   this.age = age;
// }
// ✔ 3. Object Creation
// void main() {
//   Person p1 = Person("Vishal", 20);
//   print(p1.name);
// }

// 👉 Person("Vishal", 20) constructor call ho raha hai.

// ✔ 4. Inheritance (extends)

// Student aur Professor dono Person hi hain.

// class Student extends Person {
//   String course;

//   Student(String name, int age, this.course)
//       : super(name, age);

//   @override
//   void displayRole() {
//     print("I am a Student");
//   }
// }
// ✔ 5. super Keyword

// super(name, age) → Parent class constructor call karta hai.

// Agar ye nahi likhenge to error aayega.

// ✔ 6. Method Overriding + @override

// Parent me method hai:

// void displayRole() {
//   print("I am a person");
// }

// Child me override:

// @override
// void displayRole() {
//   print("I am a Student");
// }
// @override kya karta hai?

// Compiler ko bolta hai:
// "Check karo ki main sahi override kar raha hoon."

// ✔ 7. Professor Class
// class Professor extends Person {
//   String subject;

//   Professor(String name, int age, this.subject)
//       : super(name, age);

//   @override
//   void displayRole() {
//     print("I am a Professor");
//   }
// }
// ✔ Polymorphism

// Same method name → different behavior.

// void main() {
//   Person p1 = Student("Vishal", 20, "CS");
//   Person p2 = Professor("Sharma", 45, "Math");

//   p1.displayRole();
//   p2.displayRole();
// }

// Output:
// Student wala run hoga
// Professor wala run hoga

// Ye hi polymorphism hai 🔥

// ✔ Encapsulation

// Data ko protect karna.

// class Person {
//   String _name; // private

//   Person(this._name);

//   String get name => _name;

//   set name(String value) {
//     _name = value;
//   }
// }

// _ lagane se private ho jata hai (library level).

// ✔ Abstraction

// Details hide karna.

// abstract class Person {
//   void displayRole();
// }

// Ab child ko method implement karna padega.

// 🎯 FULL ASSIGNMENT STYLE
// abstract class Person {
//   String name;
//   int age;

//   Person(this.name, this.age);

//   void displayRole();
// }

// class Student extends Person {
//   Student(String name, int age) : super(name, age);

//   @override
//   void displayRole() {
//     print("Student: $name");
//   }
// }

// class Professor extends Person {
//   Professor(String name, int age) : super(name, age);

//   @override
//   void displayRole() {
//     print("Professor: $name");
//   }
// }
// ✅ 5️⃣ Async Programming 🔥
// 🧠 Problem

// Agar data fetch karne me 5 second lage to?

// Program ruk jana chahiye? ❌
// Nahi — async use karte hain.

// ✔ Future

// Future matlab:
// "Aaj nahi, baad me milega"

// Future<String> fetchData() {
//   return Future.delayed(
//     Duration(seconds: 2),
//     () => "Data Loaded",
//   );
// }
// ✔ async + await
// Future<void> driver() async {
//   print("Start");

//   String result = await fetchData();

//   print(result);
//   print("End");
// }
// Flow:

// Start
// 2 sec wait
// Data Loaded
// End

// ✔ consumeFuture()
// void consumeFuture() {
//   fetchData().then((value) {
//     print(value);
//   });
// }
// ✔ Returning Future<String>
// Future<String> fetchData() async {
//   await Future.delayed(Duration(seconds: 2));
//   return "Server Data";
// }
// 🎯 Complete Async Assignment
// Future<String> fetchData() async {
//   await Future.delayed(Duration(seconds: 2));
//   return "Data from API";
// }

// Future<void> driver() async {
//   print("Fetching...");
//   String data = await fetchData();
//   print("Received: $data");
// }

// void main() {
//   driver();
// }
// ✅ 6️⃣ String Interpolation 🔥
// ✔ $variable
// String name = "Vishal";
// print("Hello $name");
// ✔ ${expression}
// int a = 5;
// int b = 3;

// print("Sum is ${a + b}");
// 🎯 Assignment Style
// double calculate(double a, double b) {
//   return a + b;
// }

// void main() {
//   print("Calculator: ${calculate(5, 3)}");
// }