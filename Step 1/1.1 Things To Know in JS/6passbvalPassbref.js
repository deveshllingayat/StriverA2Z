//Credit - Geeks for Geeks Article
// *pass by value example
function Passbyvalue(a, b) {
  let tmp;
  tmp = b;
  b = a;
  a = tmp;
  console.log(`Inside Pass by value 
		function -> a = ${a} b = ${b}`);
}

let a = 1;
let b = 2;
console.log(`Before calling Pass by value 
		Function -> a = ${a} b = ${b}`);

Passbyvalue(a, b);

console.log(`After calling Pass by value 
	Function -> a =${a} b = ${b}`);

// *Pass by refernece
function PassbyReference(obj) {
  let tmp = obj.a;
  obj.a = obj.b;
  obj.b = tmp;

  console.log(`Inside Pass By Reference 
		Function -> a = ${obj.a} b = ${obj.b}`);
}

let obj = {
  a: 10,
  b: 20,
};
console.log(`Before calling Pass By Reference 
	Function -> a = ${obj.a} b = ${obj.b}`);

PassbyReference(obj);

console.log(`After calling Pass By Reference 
	Function -> a = ${obj.a} b = ${obj.b}`);

//This behavior is due to the difference between primitive types (passed by value) and reference types (passed by reference) in JavaScript. Objects, arrays, functions, etc., are reference types, and when you pass them to a function, you're passing a reference to the actual object in memory.
