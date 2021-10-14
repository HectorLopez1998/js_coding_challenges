'use strict';
// Coding Challenge #9
// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
// 2. Use the problem - solving framework: Understand the problem and break it up into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data2:[12,5,-5,0,4]

// SOLUTION 
const data1 = [17, 21, 23]
const data2 = [12,5,-5,0,4]

const printForecast = function(arr){
  let count = 0
  let str = '';
  for(let i = 0; i < arr.length; i++){
    count+= 1
    str = str + `${arr[i]}oC in ${i + 1} days ...`
  }

  console.log('...' + str);
}
printForecast(data1)





// THIS IS IS NOT THE SOLUTION TO THE CHALLENGE
// !!!!!!!!!!! ⬇ !!!!!!!!!!!!!!!!!

const findMax = function (arr){
   let max = arr[0]
   let min = arr[0]
  for(let i = 0; i < arr.length; i++){
    if(arr[i] >= max){
      max = arr[i]
    }
   if(arr[i] <= min){
     min = arr[i]
   }
  }
  return (max - min)
}
// console.log(findMax([40, 1,2,103,4]));

const findMaxNew = function (arr1, arr2){
  const curTemp = arr1.concat(arr2);
  let max = curTemp[0];
  let min = curTemp[0];
 for(let i = 0; i < curTemp.length; i++){
   if(curTemp[i] >= max){
     max = curTemp[i]
   }
  if(curTemp[i] <= min){
    min = curTemp[i]
  }
 }
//  console.log(max, min)
//  console.log((max - min))
}
//findMaxNew([12,34,2],[234,242])
