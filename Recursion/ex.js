const arr = [1,2,3,[1,2]];
function a(arr){
    if(Array.isArray(arr) == true) return "yes";
}
console.log(a(arr));