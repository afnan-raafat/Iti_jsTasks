//// Task 1 #
// var message = prompt("Enter a message:");
// for (var i = 1; i <= 6; i++) {
//   document.writeln("<h" + i + ">" + message + "</h" + i + ">");
// }

///////////////////////////////////////////
// Task 2 #
var num;
var sum = 0;

while (true) {
  num = Number(prompt("Enter a numeric value (0 to stop or if the sum exceeds 100): "));

  if (isNaN(num)) {
    alert("Invalid input, please enter a numeric value."); // هيدخل غيرة 
    continue;
  }

  sum += num;
  if (num === 0 || sum > 100) break;
}

alert("sum is : " + sum);

///////////////////////////////////////////////////////////////////
// Task 3 ##
// 
var c= 0; /// Counter 
var string = prompt("Enter a string :");

for (var i = 0; i < string.length; i++) {
  if (string[i] === "e" || string[i] === "E" ) c++;
}

alert("The number of 'e' characters in the string is: " + c);


/////////////////////////////////////////////////////////////
// Task 4 ##
var string = prompt("Enter a string :"); /// abccba

var palindrome = true;

for (var i = 0; i < string.length / 2; i++) {  //abc   cba
  if (string[i] !== string[string.length - 1 - i]) {
    palindrome = false;
    break;
  }
}

if (palindrome ==true) alert(" palindrome :)");
else alert("not a palindrome :(");
/////////////////////////////////////////////////////
