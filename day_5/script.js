///////////// ##  Task 1.1  ##  //////////////////////////
// function findNumbers() {
  // var input = document.getElementById("input").value;
  // var numbers = input.split(",");
//
  // numbers.sort(function (a, b) {
    // return a - b;
  // });
//
  // var secondLowest = numbers.length > 1 ? numbers[1] : null;
  // var secondGreatest = numbers.length > 1 ? numbers[numbers.length - 2] : null;
//
  // var result = document.getElementById("result");
//
  // if (secondLowest !== null && secondGreatest !== null)
    // result.innerHTML =
      // "Second Lowest:" + secondLowest + ", Second Greatest:" + secondGreatest;
  // else result.innerHTML = "Array must contain at least two numbers.";
// }
/////////////// ##  Task 1.2  ##  //////////////////////////

// function capital() {
//   var input = document.getElementById("input").value;
//   var words = input.split(" ");
//   var result = "";
//
//   for (var i = 0; i < words.length; i++) {
    // var word = words[i];
//
    // if (word.length > 0) {
    //   var capWord = word[0].toUpperCase();
//
    //   for (var j = 1; j < word.length; j++) capWord += word[j].toLowerCase();
//
    //   result += capWord + " ";
    // } else result += " ";
//   }
//
//   document.getElementById("result").innerHTML = result;
// }
///////////////////////// ## Task 2 ### ////////////////////////////////////////

// function updateCircles() {
  // var input = Number(document.getElementById("number").value);

  // for (var i = 1; i <= 3; i++) {
    // var circle = document.getElementById("circle" + i);
    // var text = document.getElementById("text" + i);

    // circle.className = "circle";
    // text.innerHTML = "";
  // }

  // if (input === 1) {
    // document.getElementById("circle1").classList.add("red");
    // document.getElementById("text1").innerHTML = "Ready";
  // } else if (input === 2) {
    // document.getElementById("circle2").classList.add("yellow");
    // document.getElementById("text2").innerHTML = "Steady";
  // } else if (input === 3) {
    // document.getElementById("circle3").classList.add("green");
    // document.getElementById("text3").innerHTML = "Go";
//   }
// }
////////////////////////////###  DAY 6 ####///////////////////////////////////////////////////////
//   TASK 1 #
// 
// function suc() {
  // show("Success", "<i class='fas fa-check-circle'></i> ", " this is a success-message");
  // 
// }
// function err() {
//  show( "Error","<i class='fas fa-times-circle'></i> ", " this is an error-message");
  // 
// }
// document.getElementById("successBtn").addEventListener("click",  suc);
// document.getElementById("errorBtn").addEventListener("click", err);

// function show(title, message1,message2 ) {
    // const alertBox = document.getElementById("alertBox");
    // const alertMessage = document.getElementById("alertMessage");

    // alertMessage.innerHTML = `<strong>${title}</strong><br><span>${message1}</span> <br>${message2}`;
    // alertMessage.className =message2;

  // alertBox.classList.remove("hidden");
  // 

// }
// 
//////////////////////////## Task 2 ##///////////////////////////////////////////
let scrolle = document.querySelector(".gallary");
let btnBack = document.getElementById("back");
let btnnext = document.getElementById("next");
// 
scrolle.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrolle.scrollLeft += e.deltaY;
    scrolle.style.scrollBehavior = "auto";
// 
// 
});
btnnext.addEventListener("click", () => {
    scrolle.style.scrollBehavior = "smooth";
    scrolle.scrollLeft += 400; 
});
// 
btnBack.addEventListener("click", () => {
    scrolle.style.scrollBehavior = "smooth";
// 
    scrolle.scrollLeft -= 400; 
});
////////////////////////////////////////////////////