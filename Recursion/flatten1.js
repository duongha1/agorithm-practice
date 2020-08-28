function flatten(arr){
    let arr1 = [];
    for(let i = 0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            arr1 = arr1.concat(flatten(arr[i]));
        }else{
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
console.log(flatten([[1],[2],[[[[3, [4,5]]]]]]));