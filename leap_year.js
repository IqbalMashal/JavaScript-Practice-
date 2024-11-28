const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let name = "iqbbal"

function leapYear() {
    rl.question("Enter the year to check whether it's a leap year: ", function(year) {
        // Convert input to number
        year = parseInt(year);

        // Check if the input is a valid number
        if (!isNaN(year)) {
            // Leap year logic
            if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                console.log(year + " is a leap year");
            } else {
                console.log(year + " is not a leap year");
            }
        } else {
            console.log("Invalid input. Please enter a valid number.");
        }

        rl.close(); // Close the readline interface
    });
}

leapYear();
