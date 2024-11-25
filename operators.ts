//Arithmetic Operators
let x = 10;
let y = 4;
let sum = x + y; 
let difference = x - y;
let product = x * y;
let quotient = x / y;
let remainder = x % y;
console.log(`Sum ${sum}. Difference ${difference}. Product ${product}. Quotient ${quotient}. Remainder ${remainder}`);

//Comparison Operator
let m = 5;
let n = 10;

let isEqual = m == n;
let isStrictEqual = m === n;
let isNotequal = m != n;
let isGreaterThan = m > n;
let isLessThan = m < n; 
let isGreaterOrEqual = m >= n;
let isLessOrEqual = m <= n;
console.log(isEqual);
console.log(isStrictEqual);
console.log(isNotequal);
console.log(isGreaterThan);
console.log(isLessThan);
console.log(isGreaterOrEqual);
console.log(isLessOrEqual);

// Logical Operators
let isTrue = true
let isFalse = false

let andResult = isTrue && isFalse;
let orResult = isTrue || isFalse;
let notResult = !isTrue;
console.log(andResult);
console.log(orResult);
console.log(notResult);

//Assignment Operators
let num = 5;
num += 3;
console.log('Number 1', num );
num -= 2;
console.log('Number 2', num );
num *= 4;
console.log('Number 3 ', num );
num /= 3;
console.log('Number 4', num );
num %= 5;
console.log('Number 5', num );

//Ternay Operator
let age = 10
let message = age>=18?  'Adult' : 'Minor';
console.log(message)