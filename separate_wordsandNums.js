

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function separate() {
    rl.question("Enter a string with numbers, characters, or symbols: ", function(userInput) {
        // Separate alphabets using filter and regex
        let alphabets = userInput.split('').filter(char => /[a-zA-Z]/.test(char));
        
        // Separate numbers using filter and regex
        let numbers = userInput.split('').filter(char => /[0-9]/.test(char));
        
        console.log("Alphabets: ", alphabets.join(','));
        console.log("Numbers: ", numbers.join(','));
        
        rl.close();
    });
}

separate();
