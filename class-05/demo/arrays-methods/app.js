let testArray = ['301','students', 'are','the','best'];

// -------PUSH------ Add data to the end
let x = testArray.push(' and 201 students');
console.log(x);
console.log(testArray);

// -------UNSHIFT------ Add data to the beginning
// let y = testArray.unshift('My ');
// console.log(y);
// console.log(testArray);

// -------SHIFT------ take off data from the beginning
// let z = testArray.shift();
// console.log(z);
// console.log(testArray);


// -------POP------ take off data from the end
// let c = testArray.pop();
// console.log(c);
// console.log(testArray);

// let testArray = ['301','students', 'are','the','best'];

// // ---------toString-------- convert array elements to one string
// let outputArray = testArray.toString();
// console.log(testArray);
// console.log(outputArray);

// let obj = {userName:'Razan',weight:56};
// console.log(typeof obj.weight)
// console.log(typeof obj.weight.toString())


// // ---------JOIN-------- Convert the elements of an array into a string
// let outputArray2 = testArray.join('-');
// console.log(testArray);
// console.log(outputArray2);



// // ---------SPLIT-------- Split a string into an array of substrings
// let testString = 'hello world'; // ['hello','world']
// let outputArray3 = testString.split('o');
// console.log(testString);
// console.log(outputArray3);


// let str = ['ASAC','is','the','best'];
// ----------SLICE--------- select elements from the array (No change on the original array)
// let output = str.slice(1,3);
// console.log(str);
// console.log(output);

// // ----------SPLICE--------- Insert/Remove elements in the array (Alters the original array)
// let output2 = str.splice(1,2); // at position 1 remove 2 items
// console.log(str);
// console.log(output2);

// let output = str.splice(2,2,'cute'); // at position 2 remove 2 items and add 1 items
// let output = str.splice(2,0,'cute'); // at position 2 remove 0 items and add 1 items
// console.log(str);
// console.log(output);

// let arr = ['ASAC','is','the','best'];

// Concatenate arrays
// let arr2 = ['and','smart'];
// let arrN = arr.concat(['and','cute'],arr2);
// console.log(arrN);

// userName ->camelCase
// user_name -> snake_case
// user-name -> Kebab-case 
// UserName -> PascalCase

// Reverse array
// let arr2 = arr.reverse();
// console.log(arr2);
// console.log(arr);

// Slice wih strings
// let str = "Hello world!"; 
// let res = str.slice(3);
// console.log(str); // Hello world!
// console.log(res); // lo world!