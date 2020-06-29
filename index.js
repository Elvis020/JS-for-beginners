// console.log("YOLO");


// JS Basics
// let name = "Mosh";
// let age = 30;
// let isApproved = true;
// let selectedColor = null; // Used when you want to clear the value of the variable.
// let person = {
//     name: 'Mosh',
//     age: 30
// }; // an object literal

// Dot notation
// person.name = 'Elvis'

// Bracket notation
// let selection = 'name';
// person[selection] = 'Moi';
// console.log(person)

// Arrays
// let selectedColors = ['red','blue'];
// selectedColors[2] = 'green';
// console.log(selectedColors.length)


// Functions
// function greet(name) {
//     console.log("Hello " + name);
// }
// greet('Elvis');
// greet('Marty');
// greet('Esther');
// function squarey(number) {
//     return number * number;
// }
// console.log(squarey(23))

// if else
// let points = 110;
// let type = points < 10 ? 'gold' : 'silver';
// console.log(type);

// Bitwise operator
// Read, write, execute
// 0000100-Read
// 0000010-Write
// 0000001-Execute


// const readPermission = 4;
// const writePermission = 2;
// const executePermission = 1;

// let myPermission  = 0;
// myPermission = myPermission | writePermission ;

// let message = (myPermission & readPermission) ? 'yes' : 'no';
// console.log(message)


// Swapping exercise
// let a  = 'red';
// let b  = 'blue';
// let c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);


// Flow Control

// If-else
// let hour = 1;
// if(hour >=6 && hour < 12)
//     console.log("Good morning");
// else if( hour >= 12  && hour <= 18) 
//     console.log('Good Afternoon');
// else 
//     console.log('Good Evening');


// Swich-case
// let role ;
// switch(role) {
//     case 'guest':
//         console.log('Guest User');
//         break;

//     case 'moderator':
//     console.log('Moderator User');
//     break;

//     default:
//         console.log('Unknown User');
//         break;
// }

// if (role ==='guest') console.log('Guest User');
// else if (role ==='moderator') console.log('Moderator User');
// else console.log('Unknown User');



// Loops 
// For loop Ascending order
// for (let i=0; i<=20; i++) {
//     if (i % 2 != 0) console.log(i)
// }

// for loop desceanding order
// for (let i=20; i>=1; i--) {
//     if (i % 2 != 0) console.log(i)
// }

// while loop
// let i = 0;
// while (i <= 20) {
//     if(i % 2 != 0) console.log(i);
//     i++;
// }

// do while loop --not really used
// let i = 8;
// do {
//     if(i%2 != 0) console.log(i);
//     i++
// } while (i <= 20);


//infinite loop
// let i = 0;
// while (i < 5) {
//     console.log(i);
// }


// for in loop
// const person = {
//     name: 'Mosh',
//     age: 30
// };
// for (let key in person) {
//     console.log(key, person[key]);
// }

// const colors = ['red','yellow','blue']
// for (let index of colors) {
//     console.log(index)
// };

//break and continue statements
// let i = 0;
// while (i <= 10) {
//     if (i%2 === 0) {
//         i++
//         continue
//     }
//     console.log(i)
//     i++
// }

// Max of two numbers exercise
// function maxxy(num1, num2) {
//     return(num1 > num2) ? num1: num2;
// }

// let numbers = maxxy(-1,-9);
// console.log(numbers)


//isLandscape Exercise
// function isLandscape(width, height) {
//     return(width > height); 
// }

// console.log(isLandscape(2000,100))


// The Fizzbuzz exercise

// Instructions

// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 & 5 => Fizzbuzz
//Not divisible by 3 or 5 => return number
// Not a number => 'Not a number'

// Solutions

// function fizzBuzz(input) {
//     if ( typeof input !== 'number' ) return NaN;
//     if((input % 3 === 0) && (input % 5 === 0)) return('FizzBuzz');
//     if(input % 3 === 0) return('Fizz');
//     if(input % 5 === 0) return('Buzz');
//     return input;
// }
// console.log(fizzBuzz(false))

// The Checkspeed Exercise

// Instructions
// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended

// Solution
// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if (speed <= speedLimit + kmPerPoint) console.log('Ok');
//     else if (speed > speedLimit) {
//         const points = Math.floor((speed - speedLimit) / kmPerPoint);
//         if (points >= 12) console.log('License Suspended') 
//         else console.log('Points: ', points);
//     }
// }

// checkSpeed(130)

// Even and Odd Numbers
// function showNumbers(limit) {
//         for(let i = 0; i<=limit; i++){
//                 const message = (i%2 === 0) ? "EVEN" : "ODD";
//                 console.log(i, message);
//         }
// }

// showNumbers(10)

// Count Truthy
// function countTruthy(arr) {
//         let count = 0;
//         for (let value of arr) {
//                 if(value) count++      
//         }
//         return count; 
// }

// arr = [0, undefined]
// console.log(countTruthy(arr))


// String Properties
// function showProperties(movie) {
//         for(let prop in movie)
//                 if(typeof movie[prop] === 'string') console.log(prop, movie[prop])
// }
// const movie = {
//         title: 'a',
//         year: 2015,
//         rating: 4.1,
//         director: 'b'
// }
// showProperties(movie)


// Sum of Multiples of 3 and 5
// function summy(limit) {
//         let multiples = 0
//         for(let i=1; i<=limit; i++) 
//                 if(i%3 === 0 | i%5 === 0) multiples += i
//         console.log(multiples)
// }
// summy(10)

// Grade Exercise
//My solution
// function calculateGrades(grades) {
//         let count = 0;
//         let summy = 0;
//         for(let grade of grades) {
//                 summy += grade; 
//         }
//         average = summy/grades.length;
//         if(average >=90) console.log('A');
//         if(average >=80 & average <=89) console.log('B');
//         if(average >=70 & average <=79) console.log('C');
//         if(average >=60 & average <=69) console.log('D');
//         if(average >=1 & average <=59) console.log('F');

// }

// Other Solution 
// function calculateAvergae(marks) {
//         let summy = 0;
//         for(let mark of marks) {
//                 summy += mark; 
//         }
//         return average = summy/marks.length;
// }
// function calculateGrades(grades) {
//         const average = calculateAvergae(grades)
//         if(average < 60) console.log(average,': F');
//         else if(average < 70) console.log(Math.floor(average),': D');
//         else if(average < 80) console.log(Math.floor(average),': C');
//         else if(average < 90) console.log(Math.floor(average),': B');
//         else console.log(average, ' : A')
// }

// const grades = [67,70,90]
// calculateGrades(grades)


// Show stars exercise
// function showStars(rows){
//         for (let row=1; row<=rows; row++) {
//                 let stars = '';
//                 for (let i=0; i<row; i++){
//                         stars += '*';
//                 }
//                 console.log(stars)
//         } 
// }

// showStars(5)

// Prime Numbers
// function primey(numb) {
//     for (let num = 2; num <= numb; num++) {
//         let isPrime = true;
//         for (let factor = 2; factor < num; factor++) {
//             if (num % factor === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) console.log(num)
//     }
// }

function myPrime(limit) {
    for (let number = 2; number <= limit; number++) {
        let myP = true;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0) {
                myP = false
                break;
            }
        }
        if (myP) console.log(number)
    }
}
myPrime(20)

// primey(20)