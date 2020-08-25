//function accepts an array and a number n. the function calculates sum of n consecutive elements in array
function slide(arr, num){
    let max = 0;
    let temp = 0;
    if(arr.length < num) return null;
    for(let i = 0; i<num; i++){
        max += arr[i];
    }
    temp = max;
    for(let i = num; i<arr.length; i++){
        temp = temp - arr[i - num] + arr[i];
        console.log("max=", max, ",",'temp= ', temp);
        max = Math.max(max, temp);
    }
    return max;
}
let arr = [1,3,2,5,7,2,4,6,8];
let num = 3;
console.log(slide(arr, num));