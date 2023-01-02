/* var resume = {
    Name : "Selva Kumaran",
    Age : 28,
    Qualification : ["10th","Diploma in ECE","BE in ECE"],
    Experience : "6 years in RR Donnelley",
    Place : "Maraimalai Nagar",
    Known_Languages : ["Tamil","English"]
}
 *//* for (i=0;i<resume.Qualification.length;i++){
console.log(resume.Qualification[i]);
} */
/* for (i in resume){
    console.log(resume[i].Experience);
} 
 *///JSON Method
var resume = [{
    "Name" : "Selva Kumaran",
    "Age" : 28,
    "Qualification" : ["10th","Diploma in ECE","BE in ECE"],
    "Experience" : "6 years in RR Donnelley",
    "Place" : "Maraimalai Nagar",
    "Known_Languages" : ["Tamil","English"]
}]
/* for (i=0;i<resume.length;i++){
    console.log(resume[i]);
    }
 */    /* for (i of resume){
        console.log(i.Qualification);
    } */
    for (i in resume){
        console.log(resume[i].Experience);
    }
//console.log(resume);
//Array of objects
let arr = [
    {
        "Name" : "Selva",
        "Age" : "28",
    },
    {
        "Name" : "Sam",
        "Age" : "20",
    },
    {
        "Name" : "Rajesh",
        "Age" : "32",
    },
    {
        "Name" : "Muthu",
        "Age" : "24",
    }
]
for(i=0;i<arr.length;i++)
{
   // console.log(arr[i].Age);
}

//call by value
/* var a = 24;
var b = a;
a = 25; */
//console.log(b);

//Call by Reference
    var a = {
       value: 24,
    }
    var b= a;
    a.value = 25;
    /* console.log(a);
    console.log(b);  */