// Olog2(n)
// length of the current array is 4, so Olog2(4) = 4
// so 4 is the max possible result here
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let counter = 0;

function binarySearch(array, item) {
  let start = 0;
  let end = array.length;
  let middle;
  let found = false;
  let position = -1;

  while (found === false && start <= end) {
    counter++;
    middle = Math.floor((start + end) / 2);
    const middleValue = array[middle];

    if (item === middleValue) {
      // tada
      found = true;
      position = middle;
      return position;
    }

    if (item < middleValue) {
      // in next interation use only left side of an array
      end = middle - 1;
    }

    if (item > middleValue) {
      // in next interation use only right side of an array
      start = middle + 1;
    }
  }

  return position;
}

const res = binarySearch(arr, 5);
console.log(res, counter);
