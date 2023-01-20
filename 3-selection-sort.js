// O(n^2)
const arr = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
  32,
];
let counter = 0;

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      counter++;
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
    }

    // switch two elements
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }

  return array;
}

const res = selectionSort(arr);
console.log(res, counter);
