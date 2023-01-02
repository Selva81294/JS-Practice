//Ques 1:
let input = "hi guvi";
// Hi guvi
// code here
// let a = input;
// let b = a[0].toUpperCase();
// let c = b+a.slice(1);
// console.log(c);
let intialcaps = (str)=>{
  let output = str[0].toUpperCase()+ str.slice(1);
  return output;
}
console.log(intialcaps(input));

//Ques 2:
let arr = [10,20,30,40];
let res = arr.reduce((acc,cv)=>acc+cv);
console.log(res);