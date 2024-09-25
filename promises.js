

// 1. Write a function getData that returns a Promise.
//    The Promise should resolve with the string "Data received" after 3 seconds.


function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Data received")
        },3000);
    })
}

getData().then((res)=>{
    console.log(res);
})



// 2. Create a Promise chain where the first Promise resolves with the number 10.
//  The next .then() multiplies the result by 2, and the next one adds 5. Log the final result.

let promise = new Promise((resolve, reject) => {
    resolve(10);  // Fixed typo from 'resolev' to 'resolve'
});

promise.then(res => 
    res * 2  // No need for 'return' when there's no block
).then(res =>
    res + 5  // Again, no need for 'return' here
).then(res => console.log(res));


// 3. Write two functions getUser(id) and getPosts(userId), both returning promises. Chain them
//  together so that after fetching the user, you fetch their posts.

// Function to simulate fetching user data
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetched user with id: ${id}`);
            resolve(id);  // Resolve the promise with the user id
        }, 1000);  // Simulate 1 second delay
    });
}

// Function to simulate fetching posts for a user
function getPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetched posts for user id: ${userId}`);
            resolve(`Posts for user id: ${userId}`);  // Resolve with a message
        }, 500);  // Simulate 0.5 second delay
    });
}

// Chain the promises together
getUser(123)
    .then((userId) => {
        // After fetching user, fetch their posts
        return getPosts(userId);
    })
    .then((posts) => {
        // Log the final result
        console.log(posts);
    })
    .catch((error) => {
        console.error('Error:', error);
    });




// 4. Create two promises, one that resolves after 1 second and another that resolves after 3 seconds.
//   Use Promise.all() to execute them in parallel and log the results when both are done.


let promise1 = new Promise((resolve,reject)=>
    setTimeout(()=>{
        resolve("promise 1 whatever")
    },3000)
);

let promise2 = new Promise((resolve,reject)=>
    setTimeout(()=>{
        resolve("promise 2")
    },1000)
);


Promise.all([promise1, promise2]).
    then((res)=>{
        console.log(res.join(','));
    })



// 5. Write two functions fetchUser() and fetchPosts(), both returning promises. Call them sequentially
//  using await, and then refactor the code to call them in parallel using Promise.all().


async function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("user fetched");  // Changed "user fetch" to "user fetched" for clarity
        }, 3000);
    });
}

async function fetchPost() {  // Ensure this name matches your intended usage
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("user data posted");
        }, 2000);
    });
}

async function getDataSequentially() {
    let user = await fetchUser();
    console.log(user);
    
    let post = await fetchPost();
    console.log(post);
}

getDataSequentially();



// 6.  Create a JavaScript Promise that, after a delay of 2 seconds, either resolves with the message "Hello World" or rejects with the error message "Error occurred".

// The outcome (resolve or reject) should be determined by a random condition, ensuring a 50/50 chance of either occurring each time the code runs.

let randomPromise = new Promise((resolve, reject)=>{
    let randTime = Math.floor(Math.random() * 2000) + 1;

    setTimeout(()=>{
        if (randTime % 2 === 0){
            resolve("Hello World")
        }
        else{
            reject("Error Occured")
        }
    }, randTime)

})

randomPromise
    .then((res)=>{
        console.log(res)
})
    .catch((error)=>{
        console.log(error)
    })


/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
       and rejects after 2 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Print out "Program complete" if the promise fulfills
    6. Print out "Program failure" if the promise rejects

    HINT: Use setTimeout for the delay
*/


console.log("Program started");

let myPromise1 = new Promise((resolve, reject)=>{
    let time = Math.floor(Math.random() < 0.5 ? 2 : 3);
    
    setTimeout(()=>{
        if(time % 2 ===0){
            resolve();
        }else{
            reject();
        }

    },time*1000)

})


console.log(myPromise1);
console.log("Program in progress...");

myPromise1.then((res)=>{
    console.log("Program started");
}).catch((err)=>{
    console.log('Program failure')
})



/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Print out "Step 1 complete" when the first promise fulfills
    6. Have the first promise return another new Promise that will
       fulfill after 3 seconds with the message: "Step 2 Complete"

    7. Print out the message from the second promise after it
       fulfills ("Step 2 Complete")

    HINT: Use setTimeout for the delay
*/


console.log("Program started");  // Step 1: Print "Program started"

// Step 2: Create a Promise that resolves after 3 seconds
let myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();  // Resolving the promise after 3 seconds
    }, 3000);
});

// Step 3: Log the promise while it's pending
console.log(myPromise2);  // This will show the Promise object in a pending state
console.log("Program in progress...");  // Step 4: Print "Program in progress..."

myPromise2.then(() => {
    console.log("Step 1 complete");  // Step 5: Print when the first promise fulfills
    
    // Step 6: Return another Promise that resolves after 3 seconds with a message
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Step 2 Complete");  // Resolving with a message
        }, 3000);
    });
}).then((message) => {
    console.log(message);  // Step 7: Print the message from the second promise
});


/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 5 seconds with the
       value {data: "Hello, friend!", error: null}
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Create a first Promise chain using the promise above and
       Print out the resolved value when the first promise fulfills
    6. Have this first promise return another new Promise that will
       fulfill after 2 seconds with the message:
       "First promise chain complete!"
    7. Print out the message from the above promise after it
       fulfills ("First promise chain complete!")

    8. Create a second Promise chain using the first promise above and
       Print out the resolved value when the second promise fulfills
    9. Have this second promise return another new Promise that will
       fulfill after 10 seconds with the message:
       "Second promise chain complete!"
   10. Print out the message from the above promise after it
       fulfills ("Second promise chain complete!")

    HINT: Use setTimeout for the delay
    HINT2: This will be using the same promise two times:
           const myPromise = new Promise(...) // step 2
           myPromise.then(...).then(...) // steps 5-7
           myPromise.then(...).then(...) // steps 8-10

    BONUS: WHY does it work this way?
*/

console.log("Program started");

const myPromise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ data: "Hello, friend!", error: null });
  }, 5000);
});

console.log(myPromise3);
console.log("Program in progress...");

myPromise3
  .then((val) => {
    console.log(val);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("First promise chain complete!");
      }, 2000);
    });
  })
  .then((val) => {
    console.log(val);
  });

// code

myPromise3
  .then((val) => {
    console.log(val);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Second promise chain complete!");
      }, 10000);
    });
  })
  .then((val) => {
    console.log(val);
  });