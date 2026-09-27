let testcases = [
    {
        name:"login test", status:"Pass"
    },
    {
        name:"search Test", status:"Fail"
    },
    {
        name:"checkout test", status:"Pass"
    },
    {
        name:"logout test", status:"Fail"
    },
];

let result = testcases
    .filter(testcase => testcase.status === "Fail")
    .map(testcase => testcase.name)
    .join("\n");

console.log(result);