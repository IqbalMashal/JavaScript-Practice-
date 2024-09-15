const readline = require('readline')


const rl = readline.createInterface(process.stdin,process.stdout)

function oddNumber(){
    rl.question("Enter a number", function(num){
        if (!isNaN(num)){
            if (num % 2 === 0){
                console.log(num + " is not an odd number, try again")
                oddNumber()
            }
            else{
                
                console.log(num + " is an odd number")
                rl.close()
            }
        }
        else{
            console.log("Enter a valid number: ")
            oddNumber()
        }
    });

}


oddNumber()