//function accepts a number, then compare with each element in a array, return the index of the element equal with the number
//binary search
function search(arr, num) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (currentElement < num) {
      min = middle + 1;
      console.log("el<num, middle = ", middle);
      console.log("---------------");
    } else if (currentElement > num) {
      max = middle - 1;
      console.log("el>num, middle = ", middle);
      console.log("---------------");
    } else return middle;
  }
  return -1;
}
let arr = [1, 2, 3, 4, 5, 6, 12, 15, 17, 20, 44, 77, 88, 99, 122, 144, 154];
let num = 12;
console.log(search(arr, num));
