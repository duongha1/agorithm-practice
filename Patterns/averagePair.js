function averagePair(arr, num){
  if(arr.length === 0) return false;
  let left = 0;
  let right = arr.length - 1;
  while(1){
    let avg = (arr[right]+arr[left])/2;
    if(avg == num){
      return true;
    }
    else if(avg > num){
      right--;
      console.log("left = ", arr[left]);
    }else{
      left++;
      console.log("right = ",arr[right]);
    }
    if(left>right) break;
  }
  return false;
}
let arr = [1,3,3,5,6,7,10,12,19];
let num = 8;
console.log(averagePair(arr, num));