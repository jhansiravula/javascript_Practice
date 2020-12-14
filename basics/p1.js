// @ts-nocheck
'use strict';
console.log('hello');
document.write("<h1>hlello world</h1>");

//Variables & data types
var num = 87; //number
name = "HP";  // string  --automaticaly assigns the data type to the variable based on the value assigned to it
var num1 = 10;


document.write(num); //prints the value assigned to num-variable
//alert(name);

var x;  //initialisation
x = 5; //declaration
console.log(num + x);
var result = "Jhansi" + num + num1;
var result1 = num + num1 + "jahnsi";

document.write("if we give a string befroe + and then values ,complete experession is considered as string as its + has precedence left to right:" + result);
console.log("if we give a string befroe + and then values ,complete experession is considered as string as its + has precedence left to right:" + result);
document.write(result1);

if (x % 2 == 0);
{
    document.write(x, "is a even number");
    console.log(x, "is a odd number");
}
//if -else
var y = 7;
if (y > 0) {
    document.write(y, "is is a positive number");
    console.log(y, "is is a positive number");
}

else if (y < 0) {
    document.write(y, "is negative number");
    console.log(y, "is is a negative number")
}
else {
    document.write(y, "it is zero");
    console.log(y, "is is zero");
}

//loical opertaors
var z = 8;
if (z % 2 == 0 && z > 0) {
    console.log(z, "is even and positive number");
}

//DOM Manipulation

console.log(document.querySelector('.messages').textContent);  //"messages" is a class from default.html
document.querySelector('.messages').textContent; //'Using this query selector we set a new value/string to the DOM elemts(ie, DOM Manipulation) ';
//below code is used to handle Events so we use add evnt listener
document.querySelector('.check').addEventListener('click', function () {

    console.log(document.querySelector('.guess').value);   //Value is used of <input> 

});

//Arrow functions
const person = {
    prsnname: "bilbo",
    // sayhi:function(){
    //     console.log(this.name, 'saysHil')
    // }
    sayhi: () => {
        console.log(this);
        console.log(this.prsnname, 'saysHi!')
    }
}
person.sayhi();

/*------------Typescript -----------*/

function greetperson(name1) {
    let greet;  //var declaration is hoisted and  has a functional scope.
    if (name1 === "chandler") {
        greet = "hello chandler";
    }
    else {
        greet = "hi there;"
    }
    console.log(greet);
}
greetperson("chander");    //o/p: Hello Chandler. if we change "greetperson("chandle") o/p will be "HI there ]"


var a=1;
var b =2;
if(a === 1){
    var a = 10;
    let b=20;  //let keyword has block declaration and are not hoisted.they are always declaraed and used not vice-versa.let declaration cannot be re declared
    console.log(a);  //o/p =10
    console.log(b); //20
}
console.log(a); //10
console.log(b); //2


for(let i=1; i<5 ;i++){   //o/p = 1,2,3,4
    //console.log(i);
    setTimeout(function(){console.log(i)},1000.);//used to display the o/p values after 1 second
};

for(var i=1; i<5 ;i++){   //o/p is 5
    //console.log(i);
    setTimeout(function(){console.log(i)},1000.);//used to display the o/p values after 1 second
};
/* ARROW FUNCTION*/

const getArrowvalue = () => {
    return 10;
}
console.log(getArrowvalue());
const arrowValue = (m,bonus) => {
    return 10*m+bonus;
}
console.log(arrowValue(5,50));

console.log(typeof getArrowvalue); //return type of getArrowvalue =function


let message ='Hello!';
message = 'World!'; // value changed
alert(message);

/*---------------------*/
let hello = 'Hello world!';

let message1;

// copy 'Hello world' from hello into message1
message1 = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(message1); // Hello world!



// ...when we need to pick a color
//let color = COLOR_ORANGE;
//alert(color); // #FF7F00;

//strings

let str = "Hello"; 
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
alert( `${phrase}, ${str2}!` );
console.log("${phrase} ,${str}");

//task 1 : in strings

let name1 = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name1"}` ); // hello name1

alert( `hello ${name1}` ); // hello Ilya

// interaction functions: Prompt,confirm,alert

//syntax : result = prompt(title, [default]);
//prompt : shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.

let age = prompt('How old are you?', );

alert(`You are ${age} years old!`); // You are 100 years old!

//usage of Confirm

//confirm: shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.

//syntax: result = confirm(question);
let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed

//type Conversion of string to number

let str3 = "123";
alert(typeof str3); // string

let num4 = Number(str3); // becomes a number 123

alert(typeof num4); // number
alert (num4);



/*-------------Strings------------------*/

let n1 = 'John';
let m1 = `Hello ${n1}`;

console.log(m1);