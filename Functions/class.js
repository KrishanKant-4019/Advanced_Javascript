// class ClassName{
//     constructor(prop1,prop2){
//          //(this) keyword refers to the object it belongs to, so it is the  first property of the instance ClassName and classes are just some special function.
//         this.prop1=prop1;
//         this.prop2=prop2;
//     }
// }
// let obj=new ClassName("arg1","arg2");
// console.log(obj.prop1)
// console.log(obj.prop2)

// class Dog{
//     constructor(dogName,weight,color,breed){ //There should be only one constructor in the class.
//         this.dogName=dogName;
//         this.weight=weight;
//         this.color=color;
//         this.breed=breed;
//     }
// }
// let dog=new Dog("Javascript",2.4,"brown","chihuahua");
// console.log(Dog.dogName)
// console.log(Dog.weight)
// console.log(Dog.color)
// console.log(Dog.breed)

// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }
// let p=new Person("Krishan Kant","Jha")
// console.log(p.firstname)
// console.log(p.lastname)

//METHODS

//Functions on a class are called methods. When defining these methods, we don't use the function keyword. We start directly with the name.

// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }

//     greet(){
//         console.log("Hi there!I'm",this.firstname);
//     }

//     compliment(name,object){
//         return "That's a wonderful"+object+","+name;
//     }
// }
// let person=new Person("Krishan Kant","Jha")
// console.log(person.firstname)
// console.log(person.lastname)
// greet();

// let compliment=p.compliment("Harry","hat");
// console.log(compliment);