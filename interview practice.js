// 1. Comma operator with function calls
// The comma operator evaluates both func1() and func2(), but only the result of the last expression (func2) is returned.
function func1() {
    return 2;
}

function func2() {
    return 4;
}

// Only the result of func2() is assigned to 'a'
let x = (func1(), func2());  // a will be 4

// 2. Equality and strict equality comparisons
// '==' checks for value equality after type coercion, while '===' checks for both value and type equality.
console.log(true == '');     // false, because true is coerced to 1, and '' is coerced to 0.
console.log('1' == 1);       // true, because '1' (string) is coerced to 1 (number) before comparison.
console.log('1' === 1);      // false, because they are of different types (string and number).

// 3. Object comparison and strict equality with primitive and object types
let a = 10;
let b = new Number(10);  // b is an object
let c = 10;

// '===' checks both value and type. 'b' is an object, and 'a' is a primitive number.
console.log(a === b);     // false, because a is a primitive and b is an object.

// 4. Spread operator with objects
// Using the spread operator creates a shallow copy of the object 'a' into 'z'. Changing 'z.name' doesn't affect 'a'.
let n = { name: 'Adarsh' };
let z = { ...a };         // 'z' is a shallow copy of 'a'
z.name = "Adil";
console.log(a.name);      // Output: 'Adarsh', because 'z' is a separate object from 'a'.

// 5. Unary plus and logical NOT operators
console.log(+true);       // Output: 1, because unary plus converts true to 1.
console.log(!"xyz");      // Output: false, because "xyz" is a truthy value, and logical NOT (!) inverts it.

// 6. Function currying
// This is an example of currying, where the function is broken into multiple smaller functions that each take one argument.
function multiplies(a) {
    return function (b) {
        const muit = a * b;
        return function (c) {
            return muit * c;
        }
    }
}

console.log(multiplies(3)(2)(4));  // Output: 24, because 3 * 2 * 4 = 24

// 7. Merging strings alternately
// This function merges two strings alternately. If one string is shorter, the remaining characters of the longer string are added at the end.
function mergeStrings(str1, str2) {
    if (str1.length == 0) {
        return str2;
    } else if (str2.length == 0) {
        return str1;
    }
    let res = [];
    let size = str1.length + str2.length;
    let str1Index = 0;
    let str2Index = 0;

    // Iterate over the combined length of both strings
    for (let i = 0; i < size; i++) {
        if (i % 2 == 0) {
            if (str1Index < str1.length) {
                res[i] = str1[str1Index];
                str1Index++;
            } else {
                res[i] = str2[str2Index];
                str2Index++;
            }
        } else {
            if (str2Index < str2.length) {
                res[i] = str2[str2Index];
                str2Index++;
            } else {
                res[i] = str1[str1Index];
                str1Index++;
            }
        }
    }
    return res.join('');
}

console.log(mergeStrings("Hello", "Word111"));  // Output: "HWeolrldo111"

// 8. Fixing the sum function call
// You tried to use parentheses incorrectly in the sum function. The corrected version separates the arguments with a comma.
function sum(a, b = 0) {
    return a + b;
}

console.log(sum(2, 4));    // Output: 6
console.log(sum(2, 3));    // Output: 5, corrected to use commas instead of parentheses.

// 9. Flattening a 2D array
let arr = [[1, 2], [3, 4], [5, 6]];

// Flattening array using loops
function flattenArray(arr) {
    let flatArray = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            flatArray.push(arr[i][j]);
        }
    }
    return flatArray;
}

console.log(flattenArray(arr));  // Output: [1, 2, 3, 4, 5, 6]

// Built-in method to flatten arrays
console.log(arr.flat());  // Output: [1, 2, 3, 4, 5, 6], using the built-in 'flat()' method
