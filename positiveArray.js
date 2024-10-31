// Write a function to determine if an array is positively dominant.
// An array is positively dominant when the majority of its elements are positive.
 
// Example:
// - `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.

const positiDominant=(array)=>{
let arrayNegativos=array.filter((number)=> number < 0)
if(arrayNegativos.length > array.length/2){
   console.log("false")
}else{
    console.log("true")
}
return;
}

positiDominant([-1, -3, -5, 4, 6767]);
