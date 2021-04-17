// Write a js program to find maximum between two numbers using switch case.
// const numOne = 5;
// const numTwo = 10;

// switch(true) {
//     case (numOne > numTwo):
//         console.log(`Bigger number is ${numOne}`);
//         break;
//     case (numOne < numTwo):
//         console.log(`Bigger number is ${numTwo}`);
//         break;
//     case (numOne === numTwo):
//         console.log(`${numOne} is equal to ${numTwo}`);
//         break;
//      default: console.log(false, '-> Something went wrong');
// }

// Write a js program to check whether a number is even or odd using switch case.
// const number = prompt("Enter a number: ");

// //check if the number is even
// if(number % 2 == 0) {
//     console.log("The number is even.");
// }

// // if the number is odd
// else {
//     console.log("The number is odd.");
// }

// 43.	 Write a js program to check whether a number is positive, negative or zero using switch case

// const number = prompt("Enter a number: ");

// if (number >= 0) {
//     if (number == 0) {
//         console.log("The number is zero");
//     } else {
//         console.log("The number is positive");
//     }
// } else {
//     console.log("The number is negative");
// }

// <!-- 43.	 Write a js program to check whether a number is positive, negative or zero using switch case -->


// const number = parseInt(prompt("Enter a number: "));

// // check if number is greater than 0
// if (number > 0) {
//     console.log("The number is positive");
// }

// // check if number is 0
// else if (number == 0) {
//   console.log("The number is zero");
// }

// // if number is less than 0
// else {
//      console.log("The number is negative");
// }

// 44.	Write a js program to find roots of a quadratic equation using switch case.

// program to solve quadratic equation
// let root1, root2;

// // take input from the user
// let a = prompt("Enter the first number: ");
// let b = prompt("Enter the second number: ");
// let c = prompt("Enter the third number: ");

// // calculate discriminant
// let discriminant = b * b - 4 * a * c;

// // condition for real and different roots
// if (discriminant > 0) {
//     root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//     root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

//     // result
//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// }

// // condition for real and equal roots
// else if (discriminant == 0) {
//     root1 = root2 = -b / (2 * a);

//     // result
//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// }

// // if roots are not real
// else {
//     let realPart = (-b / (2 * a)).toFixed(2);
//     let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

//     // result
//     console.log(
//     `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
//   );
// }


// Write a js program to create Simple Calculator using switch case.
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// // take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// let result;

// // using if...else if... else
// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }

// // display the result
// console.log(`${number1} ${operator} ${number2} = ${result}`);


// <!-- 46.	Write a js program to count total number of negative elements in an array. -->
// var ar = [-1, -2, -3, 0, 0, 5, 12, 0, -10];

// function counter(ar) {
//   var counter = [0, 0, 0];
//   ar.forEach(function(a) {
//     if (a < 0)
//       counter[0]++;
//     else if (a > 0)
//       counter[2]++;
//     else
//       counter[1]++;
//   });
//   return counter;
// }

// var result = counter(ar);
// alert("No of Negative, Zero and Positive Elements are : " + result);


// Write a js program to copy all elements from an array to another array.
// var first =  [1, 2, 3];
// var second = [4, 5];

// for (var i of second) {
//     first.push(i);
// }

// console.log(first);

// 48.	 Write a js program to insert an element in an array.

// function insertElement() {
//   let array = [1, 2, 3, 4, 5];

//   // index to add to
//   let index = 3;

//   // element that you want to add
//   let element = 8;

//   array.splice(index, 0, element);
//   console.log(array);
// }

// insertElement();

// Write a js program to delete an element from an array at specified position.

// function removeItemFromArray(array, n) {
//   const newArray = [];

//   for ( let i = 0; i < array.length; i++) {
//       if(array[i] !== n) {
//           newArray.push(array[i]);
//       }
//   }
//   return newArray;
// }

// const result = removeItemFromArray([1, 2, 3 , 4 , 5], 2);

// console.log(result);


// 50.	 Write a js program to count frequency of each element in an array.

// Array.prototype.frequencies = function() {
//   var l = this.length, result = {all:[]};
//   while (l--){
//      result[this[l]] = result[this[l]] ? ++result[this[l]] : 1;
//   }
//   // all pairs (label, frequencies) to an array of arrays(2)
//   for (var l in result){
//      if (result.hasOwnProperty(l) && l !== 'all'){
//         result.all.push([ l,result[l] ]);
//      }
//   }
//   return result;
// };

// var freqs = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].frequencies();
// alert(freqs[2]); //=> 5
// // or
// var freqs = '1,1,2,one,one,2,2,22,three,four,five,three,three,five'
//            .split(',')
//            .frequencies();
// alert(freqs.three); //=> 3

// Write a js program to print all unique elements in the array.

// var array = ["Manish", "Chandan", "Piyush",
//                      "Sunil", "Pankaj", "Piyush", 
//                      "Pankaj", "Tiny", "Chandan",
//                      "Manish"];
                       
//         var outputArray = [];
          
        
//         var count = 0;
          
        
//         var start = false;
          
//         for (j = 0; j < array.length; j++) {
//             for (k = 0; k < outputArray.length; k++) {
//                 if ( array[j] == outputArray[k] ) {
//                     start = true;
//                 }
//             }
//             count++;
//             if (count == 1 && start == false) {
//                 outputArray.push(array[j]);
//             }
//             start = false;
//             count = 0;
//         }
//         document.write(outputArray);


// Write a js program to count total number of duplicate elements in an array.

// function count() {
//   array_elements = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];

//   array_elements.sort();

//   var current = null;
//   var cnt = 0;
//   for (var i = 0; i < array_elements.length; i++) {
//       if (array_elements[i] != current) {
//           if (cnt > 0) {
//               document.write(current + ' comes --> ' + cnt + ' times<br>');
//           }
//           current = array_elements[i];
//           cnt = 1;
//       } else {
//           cnt++;
//       }
//   }
//   if (cnt > 0) {
//       document.write(current + ' comes --> ' + cnt + ' times');
//   }

// }

// count();

// Write a js program to delete all duplicate elements from an array.
// function getUnique(array){
//   var uniqueArray = [];
  
//   // Loop through array values
//   for(i=0; i < array.length; i++){
//       if(uniqueArray.indexOf(array[i]) === -1) {
//           uniqueArray.push(array[i]);
//       }
//   }
//   return uniqueArray;
// }

// var names = ["John", "Peter", "Clark", "Harry", "John", "Alice"];
// var uniqueNames = getUnique(names);
// console.log(uniqueNames);

// Write a js program to merge two array to third array.
// const cars = ['🚗', '🚙'];
// const trucks = ['🚚', '🚛'];

// const combined = cars.concat(trucks);
// // [ '🚗', '🚙', '🚚', '🚛' ]

// console.log(cars); // ['🚗', '🚙'];
// console.log(trucks); // ['🚚', '🚛'];