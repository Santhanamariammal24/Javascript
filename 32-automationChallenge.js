let actualmessage =" Login successful ";
let trimmedMessage = actualmessage.trim();
let lowercaseMessage =trimmedMessage.toLocaleLowerCase(); 
let includeMessage = lowercaseMessage.includes("login"); // Output: true
console.log(includeMessage);