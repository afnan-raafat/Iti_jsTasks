function addNumbers() {
    try {
        if (arguments.length === 0) { 
            throw Error("No parameters were passed to the function.");
        }  /// اول شرط 

        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            var num = arguments[i];
            if (typeof(num) !== 'number') {
                throw Error("There is one of  arguments not a number.");
            }
            sum += num;
        }

        return sum ; 
    }
    catch (error) {
        console.log("Error:", error.message);
    }
}
console.log(addNumbers(1, 2, 3));  /// Out 1+2+3=6
console.log(addNumbers(11, 25, 2, 8)); /// 
addNumbers(); /// No args ----->throw error 
console.log(addNumbers(5,'afnan',2));