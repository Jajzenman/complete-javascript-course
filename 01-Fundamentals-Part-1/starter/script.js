/*
////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);
*/

/*
////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);




// Assignment operators
let x = 10 + 5; // 15
x += 10; // x=x+10  = 25
x *= 4; // x * 4 = 100
x ++; // x + 1 = 101
x --; // x -1 = 99
console.log(x);

//Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

let z,y;
z= y = 25 -10-5 ; //x=y=10, x=10
console.log(z,y)

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/
/*
//Coding Challenge # 1
//let BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
//let mass = 
const MarkWeight1 = 78 ;
const MarkHeight1 = 1.69 ;
const JohnWeight1 = 92 ;
const JohnHeight1 = 1.95 ;
const MarkWeight2 = 95;
const MarkHeight2 = 1.88 ;
const JohnWeight2 = 85 ;
const JohnHeight2 = 1.76 ;
let MarkBMI = MarkWeight1 / (MarkHeight1 ** 2) ;
let JohnBMI = JohnWeight1 / (JohnHeight1 * JohnHeight1) ;
console.log(MarkBMI, JohnBMI) ;
const MarkHigherBMI = MarkBMI > JohnBMI;
console.log(MarkHigherBMI);

//Coding Challenge # 2

if (MarkHigherBMI) {
    console.log(`Mark's BMI is higher than John's!`)
} else {console.log(`John's BMI is higher than Mark's!`)};
*/
/*
*/
//Template literals
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);
console.log(`Just a regular string ...`)
console.log(`String
multiple
lines`);
*/
// If Else statements - CONTROL STRUCTURE

/*if () {
} else {
}

*/
/*
const age = 15;

if (age >= 18) {
    console.log(`Sarah can start driving license 👆🏽`); // CTL + CMD + SPACE
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young.  Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;
let century ;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

//Challenge 2

//Type conversion and Coercion
// Explicit conversion: type conversion
/*
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear)+18);
console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23),23);

// Implicit conversion: type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
*/
/*
// 5 Falsy values: 0, '', undefned, null, Null
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money) {
    console.log("Don't spend it all ;)");
}   else {
    console.log("You should get a job!");    
}

let height = 0;
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is undefined");   
}
*/
/*
// Equity Operorts
const age = '18';
if(age === 18) console.log('You just became an adult :D (strict)');
if(age ==  18) console.log('You just became an adult :D (loose)');

const favorite = prompt("What's your favorite number?")
console.log(favorite);
console.log(typeof favorite);

if (favorite == 23) { 
    console.log("Cool! 23 is  an amazing number!") 
} else if (favorite === 7) {
    console.log("7 is  an amazing number!") 
} else if (favorite === 9) {
    console.log("9 is  an amazing number!") 
} else  {
    console.log("Number is not 23 or 7 or 9") 
};
*/
/*
//Boolean logic: and, or & not operators
const  hasDriversLicense = true ; // A
const hasGoodVision = true ; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive...');
}

const isTired = true; // C
console.log(hasDriversLicense || hasGoodVision || isTired);


if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive...');
}


////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

/*
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}
*/
/*
////////////////////////////////////
// The switch Statement
const day = 'thursday';

switch(day) {
    case 'monday':  // day === 'monday'
        console.log(`Plan my course structure`);
        console.log(`Go to coding meetup`);
        break;
    case 'tuesday': 
        console.log(`Prepare theory videos`);
         break;
    case 'wednesday':  
    case 'thursday':
        console.log(`Write code examples`);
        break;
    case 'friday':
        console.log(`Record videos`);
        break;
    case 'saturday':  
    case 'sunday':
            console.log(`Enjoy the weekend :D`);
            break;
    default:
        console.log('Not a valid day!');
    
}
*/

// Statements & Expressions
/*
if (23>10) {
    const str = '23 is bigger';
}
*/
/*
//Conditional Operator (Terniary)
const age = 17;
age >= 18 ? console.log('I like to drink wine 👄') :
console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 👄' : 'water 💧';
console.log(drink)

console.log(`I like to drink $(age >= 18) ?  'wine 👄' : 'water 💧')`);
*/
////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

/*
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/
const bill = 275;
const tip = bill <= 300 && bill >= 40 ? bill * .15: bill * .2;
console.log(tip);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
console.log(`The bill was ${bill}`)

