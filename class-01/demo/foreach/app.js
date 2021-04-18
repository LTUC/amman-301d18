// Array.forEach is a method on an array that processes every element in the array with a callback
// The callback is always given the current element's value and index in the array as args
// forEach runs a CALLBACK function WITH every element of the array


let people = ['Roaa','Ahmad','Mariam','Aisha'];
// for (let i=0;i<people.length;i++) {
//   console.log(people[i]);
// }

// people.forEach(function(item,i){
//   console.log(item);
//   console.log(i);
//   console.log(item[i]);
// //   console.log(people[i]);
// })



// people.forEach((item,index)=>{
//   console.log(item);
//   console.log(index);
// })

let displayName = (item,index) => console.log(item);

// function displayName(item,index) {
//   console.log(item);
// }

people.forEach(displayName);





