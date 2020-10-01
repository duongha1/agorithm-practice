function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  let z = 0;

  //compare each element in 2 arrays
  while (i < arr1[i] && j < arr2[j]) {
    //if element in second array is bigger
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]); //then put it in general array
      i++; //and move to the next element of the first array
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  //push the remaining elements of 1 in 2 array,
  //in case, we sort 2 unequal(element) array
  while (i < arr1[i]) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2[j]) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length == 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

let arr = [50, 10, 30, 15, 20];
let a1 = [22];
let a2 = [30];
// console.log(merge(a1, a2));
console.log(mergeSort(arr));
/* for example: if we have an array[50, 10, 30, 15]        
                mergeSort([50, 10, 30, 15])
            [50,10]           merge         [30,15]
        mergeSort([50,10])            mergeSort([30,15])
      [50]  merge [10]                [30]  merge [15]
  mergeSort[50] mergeSort[10]       mergeSort[30] mergeSort[15]
 */
