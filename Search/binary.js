//find a position of an element in an array equals with a given number
function binarySearch(arr, num) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentEl = arr[middle];
    if (num > currentEl) {
      min = middle + 1;
      console.log(min);
    } else if (num < currentEl) {
      max = middle - 1;
      console.log(max);
    } else {
      return middle;
    }
  }
  return -1;
}
arr = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  9,
  10,
  11,
  22,
  33,
  44,
  55,
  66,
  77,
  88,
  99,
  100,
  102,
  120,
];
num = 102;
console.log(binarySearch(arr, num));
