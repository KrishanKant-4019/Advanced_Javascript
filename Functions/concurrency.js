//CALLBACKS-> It is a function that takes another function as an argument.

// function doSomething(callback){
//     callback();
// }

// function sayHi(){
//     console.log("Hi!");
// }
// doSomething(sayHi);

//     function judge(grade){
//         switch(true){
//             case grade=='A':
//             console.log("You got an",grade,":amazing!");
//             break;
//             case grade=='B':
//             console.log("You got a",grade,":well done!");
//             break;
//             case grade=='C':
//             console.log("You got a",grade,":alright!");
//             break;
//             case grade=='D':
//             console.log("You got a",grade,":hmm...!");
//             break;
//             default:
//             console.log("You got a",grade,"!what?!");
//     }
// }

// function getGrade(score,callback){
//     let grade;
//     switch(true){
//         case score>=90:
//             grade="A";
//             break;
//         case score>=80:
//             grade="B";
//             break;
//         case score>=70:
//             grade="C";
//             break; 
//         case score>=60:
//             grade="D";
//             break;
//         default:
//             grade="F";
//     }
//     callback(grade);
// }
// getGrade(85,judge);


// setInterval(encourage,500);

// function encourage(){
//     console.log("You're doing great, keep going!");
// }

//PROMISES-> These function needs two parameters, and these parameters are callbacks. We have called them resolve and reject here. When resolve() is called, the Promise is presumed to be successful and whatever is between that arrows is returned and used as input for the then mehtod on the Promise object. If reject() is called, the Promise failed and the catch() method on the Promise object(if present) is executed with the argument of the reject() function.

// let promise = new Promise(function(resolve, reject) {
//     let x = 20;
//     if (x > 10) {
//         resolve(x);
//     } else {
//         reject("Too low");
//     }
// });

// promise.then(
//     function(value){
//         console.log("Success:",value);
//     },
//     function(error){
//         console.log("Error:",error);
//     }
// );

// const promise = new Promise((resolve, reject) => {
//     resolve("success!");
// });

// promise
//     .then(value => {
//         console.log(value);   
//         return "we";
//     })
//     .then(value => {
//         console.log(value);   
//         return "can";
//     })
//     .then(value => {
//         console.log(value);   
//         return "chain";
//     })
//     .then(value => {
//         console.log(value);   
//         return "promises";
//     })
//     .then(value => {
//         console.log(value);   
//     })
//     .catch(error => {
//         console.log(error);
//     });
