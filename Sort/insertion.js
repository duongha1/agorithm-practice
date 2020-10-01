function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    console.log("first currentVal = " + currentVal, "i= " + i);
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      console.log("arrj+1 = " + arr[j + 1], "arrj = " + arr[j]);
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
    console.log(arr, "currentVal = " + currentVal);
  }
  return arr;
}
console.log(insertionSort([5, 3, 6, 1, 2]));
