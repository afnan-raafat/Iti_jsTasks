function validate(num1, num2) {
    try {
        if (arguments.length !== 2) {
            throw new Error(" two parameters are required.");
        }
        console.log("Hello Afnan");
        
    } catch (error) {
        console.log(error);
    }
    
}
     /// Testing :) 
validate(5, 10);  /// Hello Afnan
validate(10);    ////Throw Error
validate();    ////Throw Error

