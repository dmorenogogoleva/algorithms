// should be 69
const tree1 = [
  {
    v: 5,
    c: [
      { v: 10, c: [{ v: 11 }] },
      { v: 7, c: [{ v: 5, c: [{ v: 1 }] }] },
    ],
  },
  {
    v: 5,
    c: [{ v: 10 }, { v: 15 }],
  },
];

// should be 70
const tree2 = [
  { v: 5, c: [{ v: 5, c: [{ v: 5 }, { v: 5 }] }] },
  { v: 6, c: [{ v: 5 }, { v: 5 }, { v: 5 }] },
  { v: 1, c: [{ v: 5 }, { v: 5 }] },
  { v: 8, c: [{ v: 5, c: [{ v: 5 }] }] },
];

const recursive = (tree) => {
  let sum = 0;

  tree.forEach((node) => {
    sum += node.v;

    if (!node.c) {
      return node.v;
    }

    sum += recursive(node.c);
  });
  return sum;
};

const recursiveRes = recursive(tree2);
console.log("recursiveRes:", recursiveRes);

const iteration = (tree) => {
  if (!tree.length) return 0;

  let sum = 0;
  let stack = [];

  tree.forEach((node) => stack.push(node));

  while (stack.length) {
    const node = stack.pop();
    sum += node.v;

    if (node.c) {
      node.c.forEach((child) => stack.push(child));
    }
  }

  return sum;
};

const iterativeRes = iteration(tree2);
console.log("iterativeRes:", iterativeRes);
