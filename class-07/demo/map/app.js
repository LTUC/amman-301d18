// array.map( fn(v,i) {} ) Much like array.forEach()

// The array.map() function iterates over an array and runs a call back for each element. 

// The callback receives the value and the index of the array element as a parameter.

// The difference is that `.map()` will always return you a **new array** of the **same length** as the original array comprised of your return values

// let numbers = [2, 3, 4, 5];
// let squares = numbers.map((item)=>{
//   return item*item;
// });
// console.log(numbers);
// console.log(squares);


// using ForEach
// let numbers = [2, 3, 4, 5];
// let squares = [];
// numbers.forEach((item,idx)=>{
//   // return item*item;
//   let newNu = item*item;
//   squares.push(newNu);
// });
// console.log(numbers);
// console.log(squares);



let people = [
    { name1: "Atallah", role: "Dad" },
    { name1: "Messina", role: "Mom" },
    { name1: "Razan", role: "Kid" },
    { name1: "Zaid", role: "Kid" },
  ];
  
  
  // let names = people.map((person)=>{
  //   // return person.name1;
  //   if(person.name1 === 'Atallah') {
  //     return person.name1;
  //   }
  //   else {
  //     return 'nothing';
  //   }
  // })
  
  // console.log(names);
  
  // let names = people.map((person,idx)=> person.name1)
  // names;
  
  
  
  // **If you return nothing ... **
  // let numbers2 = [2, 3, 4, 5];
  // let newArr = numbers2.map((item,i)=>{
  // });
  // console.log(newArr);