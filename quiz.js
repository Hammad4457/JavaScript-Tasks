//Even and Odd

console.log("Answer1");
console.log("");

function addEven(num) {
  if (num % 2 === 0) {
    return "The number is EVEN";
  }
  return "The number is ODD";
}

console.log(addEven(0));

//Factorial

function factorial(num) {
  if (num > 1) {
    return num * factorial(num - 1);
  }
  return num;
}

console.log(factorial(5));

console.log("Answer2");
console.log("");

//Destructuring

let people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];

let { name: name1, age: age1 } = people[0];

let { name: name2, age: age2 } = people[1];

let { name: name3, age: age3 } = people[2];

console.log("Answer3");
console.log("");

console.log(`Name of first Person is ${name1} who is ${age1} years old`);
console.log(`Name of Second Person is ${name2} who is ${age2} years old`);
console.log(`Name of Third Person is ${name3} who is ${age3} years old`);

console.log("Answer4");
console.log("");

//Reversing the String

let string = "Hello";
let reverse = "";
for (i = string.length - 1; i >= 0; i--) {
  reverse = reverse + string[i];
}
console.log(reverse);

console.log("Answer5");
console.log("");
//Sum of the Array

function sum(numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers.length - 1; i++) {
    //         console.log(arr.length);
    sum = sum + numbers[i];
  }
  return sum;
}
const arr = [2, 3, 5, 2, 5];
console.log(sum(arr));

//Problem 6

console.log("Answer6");
console.log("");

const array = [3, 6, 2, 5, 8, 9, 4];
let temp = array[0];
for (let i = 0; i <= array.length - 1; i++) {
  if (temp < array[i]) {
    temp = array[i];
  }
  temp = temp;
}
console.log(array);

console.log("The largest element from the array is = ", temp);

//Problem 7

console.log("Answer7");
console.log("");

function leapYear(value) {
  if (value % 4 == 0 && value % 100 != 0) {
    console.log("Its a leap year");
  } else if (value % 4 == 0 && value % 100 == 0 && value % 400 == 0) {
    console.log("Its a leap year");
  } else console.log("Its not a leap year");
}
console.log("Number is 600");
leapYear(600);
console.log("Number is 800");
leapYear(800);

//Problem 8
console.log("");
console.log("Answer8");
console.log("");

function fibanocci(series, index) {
  if (series[index] == series[index - 1] + series[index - 2]) {
    console.log("Its a Fibanocci Series");
  } else console.log("It's not a Fibanocci Series");
}

const series1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
console.log(series1);
fibanocci(series1, 6);

console.log("");

const series2 = [0, 1, 3, 6, 3, 1, 2, 3, 5, 8, 13, 21, 34];
console.log(series2);
fibanocci(series2, 6);

console.log("");
console.log("Answer9");
console.log("");

let String = "Pakistan is at the verge of choas";
function wovels(string) {
  let count = 0;
  let newString = string.toLowerCase();
  for (let i = 0; i < newString.length; i++) {
    if (
      newString[i] == "a" ||
      newString[i] == "e" ||
      newString[i] == "i" ||
      newString[i] == "o" ||
      newString[i] == "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log(String);
console.log(wovels(String));

console.log("");
console.log("Answer10");
console.log("");

//Problem 10

const newArray = [2, 1, 4, 3, 5, 7, 8];
let sorted = [];

for (let i = 0; i <= newArray.length; i++) {
  for (let j = 0; j <= newArray.length; j++) {
    if (newArray[j] > newArray[i]) {
      let temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }
  }
}
console.log(newArray);

//Problem 11

console.log("");
console.log("Answer11");
console.log("");

let string1 = "pakistan is an asian country";
let words = string1.split(" ");

for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}
console.log(words.join(" "));
