//array initialisation
let arr = [];
let technologies = ['java','c','c++','html','css','bootstrap','javascript','frameworks']
console.log("Initial array:",technologies);

//add element "ANGULAR" at the end using push()
let push_ele=technologies.push('END');
console.log("adding an element at the end of array", technologies);

//ad element at the begining using unshit()
let push_ele_frst =technologies.unshift('BEGNING');
console.log("adding an element at the begining of array", technologies);


//removing a last elemt from array using pop()

let technologies1 = ['java','c','c++','html','css','bootstrap','javascript','frameworks']
console.log("Initial array:",technologies1);

let remove_lst_ele=technologies1.pop();
console.log("after removing last element from arry using pop():",technologies1);
//document.write("remove last element from arry using pop():", remove_lst_ele)

//remove first element array using shift()
let remove_frst_ele=technologies1.shift();
console.log("after removing first element from arry using shift():",technologies1);
//document.write("remove first element from arry using shift():", remove_frst_ele)

//size of array
console.log("size of array technologies:",technologies.length); //shows lenght after adding ele using push and unshift
console.log("size of array technologies1:",technologies1.length); //shows lenght after adding ele using pop and shift

//Finding an index of an element in the array
console.log("index of 'BEGINING' in technlogies array:", technologies.indexOf('BEGNING'));
console.log("index of 'END' in technlogies array:", technologies.indexOf('END'));
console.log("index of 'html' in technlogies array:", technologies.indexOf('BEGINING'));
console.log("index of 'css' in technlogies1 array:", technologies1.indexOf('css'));
console.log("index of 'java' in technlogies1 array:", technologies1.indexOf('java')); // shows -1 as java is removed from technologies1 array

//To check if a value is an array, you use Array.isArray() method:
console.log("checkeing whether technologies is array or not:", Array.isArray(technologies)); // returns true
let abc;
console.log("checkeing whether abc is array or not:", Array.isArray(abc)); //abc is not declared any where as array
//returns false as abc is not array

//JavaScript Array splice: Delete, Insert, and Replace

let scores = [1, 2, 3, 4, 5]; //deleting using splice
let deletedScores = scores.splice(0, 3);
console.log(scores); //  [4, 5]
console.log(deletedScores); // [1, 2, 3]

//inserting new elements using splice
let colors = ['red', 'green', 'blue'];
colors.splice(2, 0, 'purple');
console.log(colors); // ["red", "green", "purple", "blue"]

// having more than 1 element in 3rd position
colors.splice(1, 0, 'yellow', 'pink');
console.log(colors);  // ["red", "yellow", "pink", "green", "purple", "blue"]

//Replacing elements using JavaScript Array splice() method

let languages = ['C', 'C++', 'Java', 'JavaScript'];
languages.splice(1, 1, 'Python');
console.log(languages);   // ["C", "Python", "Java", "JavaScript"] i,e; c++ in index=1 is replaced with javascript

languages.splice(2,1,'C#','Swift','Go');
console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"] i,e; java in index=2 is replace with c# ,swift,Go

//every() using noraml function
let numbers = [1, 3, 5];
let isEven = numbers.every(function (e) {
    return e % 2 == 0;
});

console.log(isEven); //fasle

//using every( ) & arrow function

let numbers1 = [1, 3, 5];
let isOdd = numbers1.every(e => e % 2== 1);

console.log(isOdd);  //returns true

//Sorting an array of numbers


let numbers2 = [0, 1 , 4, 7, 40, 2, 3, 10, 20, 30 ];
console.log("sorted numbers: ", numbers2.sort())//The sort() method casts elements to strings and compares the strings to determine the orders.
//so output format changes for the above console.log

/*numbers2.sort(( a , b) => a>b ? -1 :a<b ? 1: 0); //descending order
console.log("sorted numbers: ", numbers2);

*numbers2.sort(( a , b) => a>b ? 1 :a<b ? 11: 0); //ascending order
console.log("sorted numbers: ", numbers2);
*/
                    //OR

numbers2.sort((a, b) => a - b);
console.log("ASCENDING order sorted numbers: ", numbers2);
numbers2.sort((a, b) => b - a);
console.log("DESCENDING order sorted numbers: ", numbers2);

//Sorting an array of strings

let animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];

animals.sort();

console.log(animals);

//To sort the animals array in descending order

animals.sort((a, b) => (a>b) ? -1 : (a<b) ? 1: 0);

console.log(animals);

// sorting array with mixed cases
let mixedCaseAnimals = ['CAt', 'dOg', 'Elephant', 'bEe', 'Ant'];

mixedCaseAnimals.sort(function (a, b) {
    let x = a.toUpperCase(),
        y = b.toUpperCase();
    return x == y ? 0 : x > y ? 1 : -1;

});
console.log(mixedCaseAnimals);

//Sorting an array of strings with non-ASCII characters


let animaux = ['zèbre', 'abeille', 'écureuil', 'chat'];
animaux.sort();

console.log(animaux);

animaux.sort(function (a, b) {
    return a.localeCompare(b);
});
console.log(animaux);


//Sorting an array of objects by a specified property


let employees = [
    {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
    {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
];
employees.sort(function (x, y) {
    return x.salary - y.salary;
});

console.table(employees);

//Sorting objects by a string property
employees.sort(function (x, y) {
    let a = x.name.toUpperCase(),
        b = y.name.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
});

console.table(employees);
//Sorting objects by the date property
employees.sort(function (x, y) {
    let a = new Date(x.hireDate),
        b = new Date(y.hireDate);
    return a - b ;
});

console.table(employees);

//merge arrays

let concatarry = technologies.concat(animals, animaux, numbers2)
console.log(concatarry)

//join()

const title = 'JavaScript array join example';
const url = title.split(' ')
    .join('-')
    .toLowerCase();

console.log(url);

const url1 = title.split('')  //no space btn '' in split()
    .join('-')
    .toUpperCase();

console.log(url1);

//multidimensional arrays

let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];

console.table(activities);

console.log(activities[0][1]); // 9 //returning the second element of inner array //o/p changes depencind on the values assigned 

//using push() for multidimensional array
activities.push(['Study',2]);
console.table(activities);

//using splice()
activities.splice(1, 0, ['Programming', 2]);

console.table(activities);

//calculates the percentage of the hours spent on each activity and appends the percentage to the inner array.

activities.forEach(activity => {
    let percentage = ((activity[1] / 24) * 100).toFixed();
    activity[2] = percentage + '%';
});

console.table(activities);

//Removing elements from the JavaScript multidimensional array using pop( ) && splice()

activities.pop();

console.table(activities);

activities.forEach((activity) => {
    activity.pop(2);   //removing the 2-row %'s row in the table
});

console.table(activities);


//Iterating over elements of the JavaScript multidimensional array
// loop the outer array
for (let i = 0; i < activities.length; i++) {
    // get the size of the inner array
    let innerArrayLength = activities[i].length;
    // loop the inner array
    for (let j = 0; j < innerArrayLength; j++) {
        console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
    }
}

//using forEach()
activities.forEach((activity) => {
    activity.forEach((data) => {
        console.log(data);
    });
});