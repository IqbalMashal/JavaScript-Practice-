const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function bmi_Calc() {
    rl.question("Enter your weight in kg rounded to a whole number: ", function(weight) {
        // Convert weight to a number
        
        if (isFinite(weight) && weight > 0) {
            rl.question("Enter your height in cm rounded to a whole number: ", function(height) {
                // Convert height to a number
                height = parseFloat(height);
                
                if (isFinite(height) && height > 0) {
                    // Calculate BMI
                    let bmi = weight / (height * height);
                    bmi *= 10000;
                    console.log("Your BMI is", bmi.toFixed(1));
                    rl.close(); // Close the readline interface
                } else {
                    console.log("Invalid height input. Please enter a positive number.");
                    rl.close(); // Close the readline interface
                    bmi_Calc(); // Recall the function to retry
                }
            });
        } else {
            console.log("Invalid weight input. Please enter a positive number.");
            rl.close(); // Close the readline interface
            bmi_Calc(); // Recall the function to retry
        }
    });
}

bmi_Calc();
