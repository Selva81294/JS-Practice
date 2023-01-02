//Counter rotation:
let Counterrotation = (arr)=>{
    let min = arr[0];
    let minIndex = "";
    for(i=0;i<arr.length;i++){
       if (min>arr[i]){
            min=arr[i];
            minIndex =i; 
        } 
    }
    console.log(`${minIndex} times rotated from right to left`)
}
Counterrotation([3,4,5,6,1,2]);