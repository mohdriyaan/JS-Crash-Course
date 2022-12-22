// Operators
// 2+3
// Here 2 and 3 are operands
// + is the operator

/*
1.Arithmetic
2.Assignment
3.String
4.Bitwise
5.Logical
6.Other
7.Comparision */

// Arithmetic:- +,-,*,/,%
// Assignment:- =,+=,-=,*=,/=
// Instead of writing let a=5
//                     a=a+10 we can use:
// let a+=10

// Increment And Decrement
// Prefix ++a // I will update the value at first
// Postfix a++ // I will update it but print itbin second call

// String :
// let a ="hello"
// let b="world"
// console.log(a+b)

// Bitwise
// AND , OR , XOR , NOT
// X  &  Y  X&Y
// 0  &  0   0  
// 0  &  1   0
// 1  &  0   0
// 1  &  1   1

// X  |  Y   X&Y
// 0  | 0     0
// 0  | 1     1
// 1  | 0     1
// 1  | 1     1

// X  ^  Y   X&Y
// 0  ^ 0     0
// 0  ^ 1     1
// 1  ^ 0     1
// 1  ^ 1     0

// X ! Y
// 0 ==> 1
// 1 ===> 0
// let a = 10;
// let b = 2;

// console.log(a & b); // 
// console.log(a | b); // 

// 10 => 1010
// 2 ==> 0010
//       1010
       
// ==> Decimal 2

// Logical,

// AND , OR , NOT

// X      &&  Y       X&&Y
// TRUE   &&  FALSE   FALSE  
// TRUE   &&  TRUE    TRUE
// FALSE  &&  FALSE  FALSE
// FALSE  &&  TRUE   FALSE

// X     ||  Y        X&&Y
// TRUE  || FALSE     TRUE
// TRUE  || TRUE      TRUE
// FALSE || FALSE    FALSE
// FALSE || TRUE     TRUE

// NOT !
// TRUE ==> FALSE
// FALSE ===> TRUE

// Other Operators

// typeof
// let a = "Riyaan";
// console.log(typeof a);

// in
// let obj = {
//   name: "Riyaan",
// };

// console.log("name" in obj);

//delete
// let arr = [0, 1, 2, 3, 4];

// delete arr[0]

// console.log(arr.flat()); 

// Comparison
let a=10
let b="10"
console.log(a==b)
console.log(a===b)


