document.write('storing function as a part of objects' );
document.write("<br />"); //for new line
let john = {
    name: "John",
    sayHi: function() {
      document.write("Hi buddy!");
    }
  };
  
 john.sayHi(); // Hi buddy!
 document.write("<h1>String Manipulation</h1>")

 let str = 'JavaScript String Type';  //single quotes
 let str2 ="Introduction to JavaScript String type";  //double quotes
 let str3 = ` JavaScript String type and how to manipulate strings effectively`;  //using backticks
 let string4 = new String("A String object");
 function sum(a, b) {
    return a + b;
  }
  
  console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
  let output=str + str2 + 3+45;
  document.write("String followed by a number using (+):--->",    output)
  document.write("<br />"); //for new line
  let output1=str + str2 + 3 * 45;
  document.write("String followed by a number using (*):--->",    output1)
  document.write("<br />"); //for new line
  let output2= 3 * 45+str + str2;
  document.write("number followed by a string using (*):--->",    output2)
  document.write("<br />"); //for new line
  let output3= (3 - 45+str + str2);
  document.write("number followed by a string using (-):--->",    output3)
  document.write("<br />"); //for new line
  let output4= 3 + 45+str + str2;
  document.write("number followed by a string using (+):--->",    output4)
  document.write("<br />"); //for new line
 //Lenght of the string
  console.log("lenght of string str:", str.length);


  console.log(str.valueOf());                             //   valueOf: returns the array itself
  console.log(str.toString());                            //   toString(): Converts the array to a string and returns the result, each item separated by a comma.
console.log(str.toLocaleString());                        //   toLocalString(): Converts the array to a local array and returns the result.
                            
 document.write("letter at 6th position n the str:", str[6], "<br/>using charAt: ",str.charAt(20),"<br/> converting string to uppr case:", str.toUpperCase()) ;                                                           
                             
//String concatination

document.write("<br/> Concatenating strings<br/>");

let concat=str.concat('' , "CONCATINATING STRING");

document.write("After concatination:", concat);

document.write("<br/>extracting substring between index 0,10:   ", str.substr(0, 10)); // "JavaScript"
console.log(str.substr(11,6)); // "String"

let str5 = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it

let pos = 0;
while (true) {
  let foundPos = str5.indexOf(target, pos);
  if (foundPos == -1) break;

  document.write( "<br/> identifying all the indexes where 'as' is found in str5:" ,`Found at ${foundPos}` );
  pos = foundPos + 1; // continue the search from the next position
}
// trim() method creates a copy of the original string with whitespace characters stripped, it doesn’t change the original string.

document.write("<br/> removes white spaces using trim()::  ",   str3.trim());
// trimStart() returns a string with whitespace characters stripped from the beginning of a string.
// trimEnd() returns a string with the whitespace characters stripped from the end of a string.


document.write("<h1>JavaScript String split()</h1>")
let paragraph = 'Good Morning! How are you? This is John. John is my friend.'; // splitting using regular expressions
let sentences = paragraph.split(/[!,?,.]/);
let sentence1 = paragraph.split(/([!,?,.])/);
console.log(sentences);
console.log(sentence1);

// setting a limit of words to split

let sentnc1 = str.split(' ',3); //has space b/n ' '
console.log(sentnc1);

let snt = str.split('',6);
console.log(snt);

let sentce = paragraph.split('');  //no space
console.log(sentce);

let sentce2 = paragraph.split(' '); //there is a difference in output when there is a space in '' & '  '. Also o/p differs when thre is a sinle space and multiple space b/n ' '
console.log(sentce2);

//extracting substring
let email = 'john.doe@gmail.com';
let domain = email.substring(email.indexOf('@') + 1);

console.log(domain); // gmail.com

let substring = paragraph.substring(11);
console.log(substring); //gives op strtng from index 11

let substrng =paragraph.substring(5,20)  // gives o/p between 5 & 20
console.log(substrng)


//The slice() method returns a substr from the startIndex to the endIndex in the str:syntax: let substr = str.slice(startIndex [, endIndex ]);


document.write("<br/>three extracting methods:<br/>slice(start, end) <br/> substring(start, end),<br/>substr(start, length)")
let res = str.slice(7, 13);
console.log(res);

let res1 = str2.slice(-12,-8);  //If a parameter is negative, the position is counted from the end of the string.
console.log(res1);

document.write("<h1>Replace() string</h1>")
let str9 = "Please visit Microsoft!"; 
let txt = str9.replace("Microsoft","W3Schools");
document.write("after replacing the microsoft :" , txt)  ;