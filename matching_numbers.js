// Function that returns the number of matches found for the first argument in 
//the remaining arguments: findMatches(66, 1, 345, 2334, 66, 67, 66) should return 2



let num = [66, 1, 345, 2334, 66, 67, 66]


function findMatches(arr){
    if (arr.length <= 0) return 0;
    
    let match = 0;
    let count = 0;
    for(let i = 1; i < arr.length; i++){
        if (arr[match] === arr[i]){
            count++;
        }
    }
    return count;
}

console.log(findMatches(num));

