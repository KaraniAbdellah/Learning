// TypeScript Simple Types
/*
    - Primitive types: bigint, number, string, bload, ...
    - type = interface: same for define types
        interface can be used from class but type no
    
    - do not mix between types and interfaces
*/

// Primitive Types
let gender; // any can be [int, float, str, ...]
gender = 10;
gender = "Abdellah";
gender = false;

let age: number = 10; // Implicit type --> type based in value
// age = "Abdellah"; // Error


// Objects
interface User {
    name: string,
    age?: number, // can exit or no
    roles: Array<string>
    id: string | number
}
type Student = {
    score: number
}
type StudentProfile = Student & User;

let user_std: User & Student; // should hold User & Student proprietes 
let user: User;
let exprs: any = {};
let jobs: {name: string}; // array of object with imple prop string


// Arrays
let friends: number[] = [1, 2, 3]; // array of numbers
let values: Array<any> = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 

// https://www.w3schools.com/typescript/typescript_arrays.php


