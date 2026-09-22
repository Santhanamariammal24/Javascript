function login(user, password) { //function with two parameters
    if (user === "admin" && password === "admin123") { // checking if the username and password match the expected values
        console.log("Login successful");
    } else {
        console.log("Invalid credentials");
    }
}
login("admin", "admin123"); //calling the function with two parameters