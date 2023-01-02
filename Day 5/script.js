//Functions
/* function mul(a,b){
    console.log(a*b);
}
mul(2,3);
mul(4,6); */

//function with return
/* function mul(a,b,c) {
    return a*b*c;
}
console.log(mul(5,5,5)); */

//Extract odd numbers using function method

/* let arr = [12,13,14,15,16,17,18,19,20];
let result = [];
function odd(arr) {
    for (i=0;i<arr.length;i++){
        if (arr[i]%2 != 0)
        {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(odd(arr)); */

//Extract even numbers using funtion method
/* let arr = [12,13,14,15,16,17,18,19,20];
let result = [];
function even(arr) {
    for (i=0;i<arr.length;i++){
        if (arr[i]%2 == 0)
        {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(even(arr)); */

//Anonyomus Function:
/* let arr = [12,13,14,15,16,17,18,19,20];
let result = [];
let even = function(arr) {
    for (i=0;i<arr.length;i++){
        if (arr[i]%2 == 0)
        {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(even(arr)); */

//IIFE (Inmediately Invoked Function Expression)
/* (function even(arr) {
    let result = [];
    for (i=0;i<arr.length;i++){
        if (arr[i]%2 == 0)
        {
            result.push(arr[i]);
        }
    }
    console.log(result);
})([2,3,4,5,6,7,8,9]) */

//Arrow Function
// let even = (arr)=>{
//     let result = [];
//     for (i=0;i<arr.length;i++){
//         if (arr[i]%2 == 0)
//         {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// let arr = [2,3,4,5,6,7,8,9];
//console.log(even(arr));
//another method
//console.log(even(([2,3,4,5,6,7,8,9])))

//Template terminals
// let a=2;
// let b=4;
//console.log(`the sum of a and b is ${a+b}`)

//Spread operator
// let z = "guvi"
// console.log(...z)
// let y = ["guvi","geek"]
// console.log(...y)
// let arr1 = ["cdf","dfds","dfd"]; 
// let arr2 = ["efdef","efvd"]
// let arr3 = [...arr1,...arr2];
// console.log(arr3)

// //Rest parameter
// function foo(a,b, ...Rest){
//     let sum = 0;
//     for(i=0;i<Rest.length;i++){
//         sum = sum+Rest[i];
//     }
//     return sum;
// }
// console.log(foo(1,2,3,4,5))
//ignored a and b values then output is the sum of rest values

//Assending and dessending order
// let a1 = [20,15,9];
// let arrA = a1.sort(function(a,b){return a-b})
// let a2 = [3,54,11];
// let arrB = a2.sort(function(a,b){return b-a})
// console.log(arrA);
// console.log(arrB);

//print median of 2 sorted same array
// function median(arr){
//     let len = arr.length;
//     let mid = Math.floor(len/2);
//     if(len % 2 != 0)
//     {
//         return arr[mid];
//     }
//     else {
//         return (arr[mid-1] + arr[mid]) / 2;
//     }
// }
// let arr1 = [3,2,5];
// let arr2 = [10,13,11];
// let arr = [...arr1,...arr2];
// let arrsort = arr.sort(function(a,b) {return a-b});
// console.log(arrsort);
// console.log(median(arrsort));