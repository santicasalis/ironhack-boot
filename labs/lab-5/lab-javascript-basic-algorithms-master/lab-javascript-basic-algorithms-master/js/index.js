// Iteration 1: Names and Input
let hacker1 = "Santiago"
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Diego"
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals


if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
} else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${(hacker1.length)} characters.`);
} else {
    console.log(`The driver has the longest name, it has ${(hacker2.length)} characters.`)
}

// Iteration 3: Loops

// 3.1

console.log(hacker1.toUpperCase().split("").join("  "))

let reservedName=""
for (let i = 0; i < hacker1.length; i++){
    reservedName+=hacker1[i].toUpperCase()+ " " 
}
console.log(reservedName);




// 3.2 Reverse order
console.log(hacker1.toUpperCase().split("").reverse().join(""))

let reverseString = ""
for (let i = hacker1.length - 1; i >= 0; i--){
    reverseString+=hacker1[i]
} 
console.log(reverseString);

//3.3 
if (hacker1 == hacker2) {
  console.log("What?! You both have the same name?");
} else if (hacker1 > hacker2) {
    console.log("The driver's name goes first.");
} else {
    console.log("yo, the navigator goes first definitely");
}


//Inside a function

const lexicographicOrder = (hacker1, hacker2) => {
    if (hacker1 == hacker2) {
        console.log("What?! You both have the same name?");
      } else if (hacker1 > hacker2) {
          console.log("The driver's name goes first.");
      } else {
          console.log("yo, the navigator goes first definitely");
      }
    
}


//Bonus Time 1

let lorem = "Lorem ipsum dolor  sit amet consectetur, et adipisicing elit. Similique quaerat nam, qui dolore quidem voluptatem nulla ipsa deleniti modi, culpa incidunt animi quibusdam quo numquam, asperiores perferendis quod officiis facere!"

//Make your program count the number of words in the string.
console.log(lorem.split("").length);

//Make your program count the number of times the Latin word et appears
console.log(lorem.match(/et/g).length);


let trimmedLorem=lorem.trim() 
let etCount = 0
for (key of trimmedLorem) {
    if(key===" et ") etCount+=1
}
console.log(`${etCount +1}`);

//Bonus Time 2

let phraseToCheck = "amor roma"
let phraseToCheckPalindrome= phraseToCheck.split("").reverse().join("")

if (phraseToCheck.toLowerCase()==phraseToCheckPalindrome.toLowerCase()) {
    console.log("THE STRING IS A PALINDROME");
} else {
    console.log("THE STRING IS NOT A PALINDROME");
}
console.log(phraseToCheckPalindrome)