function bubble(arr) {
  let noswap;
  for (let i = 0; i < arr.length; i++) {
    noswap = 1;
    for (let j = 0; j < arr.length; j++) {
      console.log(arr, arr[j], arr[j + 1], " i = " + i, " noswap = " + noswap);
      if (arr[j] > arr[j + 1]) {
        //swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noswap = 0;
      }
    }
    if (noswap == 1) break;
  }
  return arr;
}
console.log(bubble(["f", "a", "q", "e", "b", "d", "c"]));
