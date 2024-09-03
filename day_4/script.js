///////////////////////// # Day 4 #/////////////////////////////////

// task 1 # --------------> Fizz Buzz
function fB(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizz buzz";
    } else if (num % 3 === 0) {
        return "fizz";
    } else if (num % 5 === 0) {
        return "buzz";
    } else {
        return "none";
    }
}

var num = prompt("Enter a number:");
    var result = fB(num);
alert(result);
///////////////////////////////////////////////////
// Task 2 #


var n1 =Number( prompt("Enter number 1:"));
var n2 =Number( prompt("Enter number 2:"));
var n3 =Number( prompt("Enter number 3:"));
 
// func 1 Add 
function sum(a, b, c) {
    return a + b + c;
}

// func 2 Mul  
function mul(a, b, c) {
    return a * b * c;
}

// func 3 Div 
function div(a, b, c) {
    return a / b / c;
}


        function display(a,b,c) {
            var s = sum(a,b,c);
            var multiplication = mul(a,b,c);
            var division = div(a,b,c);
            alert(`sum is ${s}  mul is ${multiplication} division is ${division} `)
        }
        display(n1,n2,n3);
