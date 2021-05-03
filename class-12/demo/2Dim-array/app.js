// Two Dimensional Array

// One practical application of using nested for loops is working with multi-dimensional arrays.

// A 2 Dimensional array is simply an array whose elements are also arrays.


let table = [
    [2,4,6,5,4,8],
    [1,3,7,9],
    [4,3,8,6]
  ];
  
  // for(let i =0;i < table.length ; i++) {
  //   let line='-';
  //   for(let j=0; j< table[i].length ; j++){
  //     line = line + table [i][j] + ' ';
  //   }
  //   console.log(line);
  // }
  
  // ForEach
  // table.forEach(val=>{
  //    let line='-';
  //    val.forEach(val2=>{
  //      line = line+val2+' ';
  //    })
  //    console.log(line);
  // })
  
  
  
  // ternary if
  let age = 15;
  
  // let beverage = '';
  // if(age >= 18) {
  //   beverage = 'Adult';
  // } else {
  //   beverage = 'Young';
  // }
  // let beverage = (age >= 18) ? "Adult" : "Young";
  // console.log(beverage);