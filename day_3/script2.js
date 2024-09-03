// Task pounes ##

        // Function 1 name  
        function correctName(name) {
            return /^[a-zA-Z\s]+$/.test(name);
        }

        // Function 2 phone number 
        function isValidPhoneNumber(number) {
            return /^[0-9]{8}$/.test(number);
        }

        // Function 3 mobile number
        function isValidMobileNumber(mobile) {
            return /^(010|011|012)[0-9]{8}$/.test(mobile);
        }

        // Function 4 email
        function isValidEmail(email) {
            return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
        }

        // هستقبل البيانات 
       var namee = prompt("Enter your name:");
        while (!correctName(namee)) {
            namee = prompt("Invalid name :( Please enter a valid name :");
        }

        var phoneNumber = prompt("Enter your phone number :");
        while (!isValidPhoneNumber(phoneNumber)) {
            phoneNumber = prompt("Invalid phone number. Please enter a valid phone number :");
        }

       var mobileNumber = prompt("Enter your mobile number :");
        while (!isValidMobileNumber(mobileNumber)) {
            mobileNumber = prompt("Invalid mobile number. Please enter a valid mobile number :");
        }

           var email = prompt("Enter your email:");
while (!isValidEmail(email)) {
    email = prompt("Invalid email. Please enter a valid email:");
}

        // Display the message
        alert("Welcome," +namee +"!" );

