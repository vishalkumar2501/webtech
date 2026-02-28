// void main() {
//   print("Hello Vishal");
// }
// int main(List<String> args){
//     print(args);
//     return 0;
// }

// void main() {
//   String name = "Vishal";
//   int age = 21;
//   double height = 5.8;
//   bool isStudent = true;

//   print("Name: $name");
//   print("Age: $age");
//   print("Height: $height");
//   print("Student: $isStudent");
// }

// void main() {
//   int marks = 75;

//   if (marks >= 90) {
//     print("Grade A");
//   } else if (marks >= 60) {
//     print("Grade B");
//   } else {
//     print("Fail");
//   }
// }

// void main() {
//   for (int i = 1; i <= 5; i++) {
//     print("Number: $i");
//   }
// }


// void main() {
//   List<String> fruits = ["Apple", "Mango", "Banana"];

//   for (var fruit in fruits) {
//     print(fruit);
//   }
// }

//Dart ! and ? are mainly used for null safety
// void main() {
//   String? name;                          // ? → name null ho sakta hai

//   name = "vishal";

//   print(name!.length);                    // ! → mujhe pata hai name null nahi hai
// }

//What is functons in dart

// void main() {
//   int sum(int a, int b) {
//     return a + b;
//   }

//   print(sum(2, 3));
// }


// arrow function
// int square(int n) => n * n;

// void main() {
//   print(square(5));
// } 

// positional parameter kya hota hai 

// void main() {
//   void printDetails(String name, int age) {
//     print("Name: $name");
//     print("Age: $age");
//   }

//   printDetails("Vishal", 21);
// }

//positional -optional parameter

// void greet(String name, [int age = 0]) {
//     print("Hello $name");
//     if (age != 0) {
//         print("You are $age years old");
//     }
// }

// void main() {
//     greet("Vishal");
//     greet("Vishal", 21);
// }

//Named optional parameter

// void greet(String name, {int age = 0}) {
//     print("Hello $name");
//     if (age != 0) {
//         print("You are $age years old");
//     }
// }

// void main() {
//     greet("Vishal");
//     greet("Vishal", age: 21);
// }

//requried paramter 
// void greet(String name, {required int age}) {
//   print("Hello $name");
//   print("You are $age years old");
// }

// void main() {
//   greet("Vishal", age: 21);
// }


//default values in parameter
// void greet(String name, {int age = 0}) {
//   print("Hello $name");
//   if (age != 0) {
//     print("You are $age years old");
//   }
// }

// void main() {
//   greet("Vishal");
//   greet("Vishal", age: 21);
// }


//oops in dart 
//1. waht is class

//examole  

// class Person {
//   String name;
//   int age;

//   Person(this.name, this.age);
// }

//2. what is object

//example
// class Person {
//   String name;
//   int age; 
//
//   Person(this.name, this.age);
// }
//
// void main() {
//   Person person = Person("Vishal", 21);
//   print(person.name);
//   print(person.age);     
// }


//3. what is constructor

// class Person {
//   String name;
//   int age;
//
//   Person(this.name, this.age);
// }
//
// void main() {
//   Person person = Person("Vishal", 21);
//   print(person.name);
//   print(person.age);
// }

  

//4. what is method

// class Person {
//   String name;
//   int age;
//
//   Person(this.name, this.age);
//
//   void greet() {
//     print("Hello, my name is $name and I'm $age years old.");
//   }
// }
//
// void main() {
//   Person person = Person("Vishal", 21);
//   person.greet();
// }

//oops in dart

// Class
  
// class Student {
//   String name = "";
//   int age = 0;

//   void display() {
//     print("Name: $name");
//     print("Age: $age");
//   }
// }



// Object
// void main() {
//   Student s1 = Student();
//   s1.name = "Vishal";
//   s1.age = 20;
//   s1.display();
// }
  
  //cunstructor
//   class Student {
//   String name;
//   int age;

//   Student(this.name, this.age);
// }

// Inheritance
// class Animal {
//   void sound() {
//     print("Animal makes sound");
//   }
// }

// class Dog extends Animal {
//   void bark() {
//     print("Dog barks");
//   }
// }

// Polymorphism
// class Animal {
//   void sound() {
//     print("Animal sound");
//   }
// }

// class Dog extends Animal {
//   @override
//   void sound() {
//     print("Dog barks");
//   }
// }


// Encapsulation
// class BankAccount {
//   double _balance = 0;

//   void deposit(double amount) {
//     _balance += amount;
//   }

//   double getBalance() {
//     return _balance;
//   }
// }

// Abstraction
// abstract class Shape {
//   void area();
// }

// class Circle extends Shape {
//   @override
//   void area() {
//     print("Area of Circle");
//   }
// }