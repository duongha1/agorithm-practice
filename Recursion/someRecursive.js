const isEven = val => val % 2 == 0;
function someRecursive(arr, cb){
    if(arr.length == 0) return false;
    if(cb(arr[0]) == true) return true;
    return someRecursive(arr.slice(1), cb);
}
let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(someRecursive(arr, isEven));