// Olog2(n)
// length of the current array is 4, so Olog2(4) = 4
// so 4 is the max possible result here
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let counter1 = 0;
let counter2 = 0;

function binarySearch(array, item) {
  let start = 0;
  let end = array.length;
  let middle;
  let found = false;
  let position = -1;

  while (found === false && start <= end) {
    counter1++;
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

function recursiveBinarySearch(array, item, start, end) {
  counter2++;
  let middle = Math.floor((start + end) / 2);
  const middleValue = array[middle];

  if (item === middleValue) return middle;

  if (item < middleValue) {
    return recursiveBinarySearch(array, item, 0, middle - 1);
  } else {
    return recursiveBinarySearch(array, item, middle + 1, end);
  }
}

const resBinarySearch = binarySearch(arr, 12);
console.log("binarySearch:", resBinarySearch, counter1);

const resRecursiveBinarySearch = recursiveBinarySearch(arr, 12, 0, arr.length);
console.log("recursiveBinarySearch:", resRecursiveBinarySearch, counter2);
