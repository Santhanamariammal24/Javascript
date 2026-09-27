/* function testBrowsers(...browsers) {
    console.log(browsers);
}
testBrowsers("Chrome", "Firefox", "Edge"); // Output: ["Chrome", "Firefox", "Edge"]
//This is a simple example of using rest parameters in JavaScript. Rest parameters allow you to represent an indefinite number of arguments as an array. */

/* function runTests(...tests) {
    console.log(tests);
}

runTests("Login Test", "Search Test", "Checkout Test"); */
let user = {
    name: "Sankari",
    role: "Tester"
};

let updatedUser = {
    ...user,
    experience: 4
};

console.log(updatedUser);