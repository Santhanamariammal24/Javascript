/* let browser =["chrome","Firefox","Edge"]
console.log(browser[0]);
console.log(browser[1]);
console.log(browser[2]); */


/* 
} */
/* let user ={
    name :"sankari",
    experience : 4,
    role : "Manual Tester",
    skill:"Playwright",
};
console.log(user.name);
console.log(user.experience);
console.log(user.role);
console.log(user.skill);
 */

/* let tester ={
    name :"sankari",
    role :"Manual Tester",
};
 tester.role = "Automation Tester";
console.log(tester.role); */

/* let loginData ={
    username:"admin",
    password:"admin123",

};
console.log("Username: " + loginData.username);
console.log(loginData.password); */

let users =[
    {
        username:"admin",
        password:"admin123",
        role:"Admin",
    },
    {
        username:"tester",
        password:"tester123",
        role:"Tester",
    },
    {
        username:"user1",
        password:"user123",
        role:"User",
    }
];
for (let user of users){
    console.log("User: " + user.username + "- Role: " + user.role);
}
    
