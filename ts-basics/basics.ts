type Person = { name: string; age: number };

// Fallback type: any; also the deafult type if none is mentioned

let anyValue: any;
// can assign anything to anyValue; kind of redundant with TS, but has its uses

// Primitives: number, string, boolean

let age: number = 24;

age = 12;

let userName: string;

userName = "Leon";

let isInstructor: boolean;

isInstructor = true;

// there are also null and undefined amongst the primitive types, but those are not assignable

// More complex types: arrays, objects

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

// we can create an object blueprint
let person: { name: string; age: number };

let personWithAlias: Person;

person = { name: "Max", age: 32 };

// array of objects with this blueprint
let people: { name: string; age: number }[];

// Type inference

let course = "React - The Complete Guide";

// Functions & types

function add(a: number, b: number): number | string {
	return a + b;
}

// this function does not return anything, so it will be of type void
function printSomething(value: any) {
	console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
	const newArray = [value, ...array];
	return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
