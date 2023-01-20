// O(n)
const arr = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let counter = 0;

function linearSeacrh(array, item) {
  for (let i = 0; i < array.length; i++) {
    counter++;
    if (array[i] === item) {
      return i;
    }
  }

  return null;
}

const res = linearSeacrh(arr, 11);

console.log(res, counter);
