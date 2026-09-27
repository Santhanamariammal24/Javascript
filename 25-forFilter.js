let results =["pass","fail","pass","fail","pass","fail"];
let passedresults = results.filter((result) => {
    return result === "pass"; // Need to use filter method to iterate over the array //This is a simple example of using filter method to iterate over an array in JavaScript.
});
console.log(passedresults);