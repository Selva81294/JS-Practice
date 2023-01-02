//XMLHttpRequest
var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload = function() {
    var data = req.response
    //console.log(JSON.parse(data));
    var result = JSON.parse(data);
    //console.log(result);
    //console.log(result[0].name.common);
//To accessing multiple values
//for loop
    //for (i=0;i<result.length;i++){
        /* console.log(result[i].area);
        console.log(result[i].name.common);
        console.log(result[i].region); */
       // console.log(result[i].area, result[i].name.common);
    //}
//for of loop
    /* for (i of result) {
    console.log(i.name.common,i.region,i.subregion,i.population);
    } */
//for in loop
    /* for(i in result) {
     console.log(result[31].name.common);
    } 
 */

}
// Comparing two JSON objects without ordering
var obj1 = {name: "Person 1", age:5};
var obj2 = {age:5, name: "Person 1"};
var a = JSON.stringify(obj1);
var b = JSON.stringify(obj2);
console.log(a==b);
console.log(a===b);
