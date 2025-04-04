// function sayHello() {
//     let you = prompt("What's your name?");
//     console.log("Hello " + you + "!");
// }
//sayHello();

// let varContainingFunction=function(){
//     let varInFunction="I'm in a function.";
//     console.log("hi there!",varInFunction);
// };
// varContainingFunction();

// function tester(para1,para2){
//     return para1+" "+para2;
// }
// const arg1="argument1";
// const arg2="argument2";
// console.log(tester(arg1,arg2));

// function addNumbers(num1, num2) {
//     return parseInt(num1) + parseInt(num2);
// }
// const result = addNumbers("10", "20");
// console.log(result);

// function addTwoNumbers(x=2,y=3){
//     console.log(x+y);
// }
// addTwoNumbers();
// addTwoNumbers(6,6);
// addTwoNumbers(10);
// addTwoNumbers(1,2,3,4,);


//ARROW FUNCTIONS

// let doingArrowStuff = x =>console.log(x);
// doingArrowStuff("Great!");

// let addTwoNumbers=(x,y) => console.log(x+y);
// addTwoNumbers(6,7);

// const arr=["squirrel","alpaca","buddy"];
// arr.forEach(e=>console.log(e));


// Spread Operators(...)

// let spread=["so","much","fun"];
// let message=["JavaScript","is",...spread,"and","very","powerful"];
// console.log(message);

// function addTwoNumbers(x,y){
//     console.log(x+y);
// }
// let arr=[5,9];
// addTwoNumbers(...arr);

// function addFourNumbers(x,y,z,a){
//     console.log(x+y+z+a);
// }
// let arr1=[5,9];
// let arr2=[6,7];
// addFourNumbers(...arr1,...arr2);


//Rest Operators

// function someFunction(param1,...param2){
//     console.log(param1,param2);
// }
// someFunction("hi","there!","How are you?");


// function addTwoNumbers(a, b) {
//     return a + b;
// }
// let resultsArr = [];
// for (let i = 0; i < 10; i++) {
//     let result = addTwoNumbers(i, 2 * i);
//     resultsArr.push(result); 
// }
// console.log(resultsArr);
