class LinkedList {
  constructor() {
    this.size = 0;
    this.root = null;
  }

  add(value) {
    if (this.size === 0) {
      this.root = new Node(value);
      this.size += 1;

      return true;
    }

    let node = this.root;
    while (node.next) {
      // итерируемся по всем вложенным нодам, постепенно их раскрывая=присваивая
      node = node.next;
    }

    const newNode = new Node(value);
    // мутируем this.root
    node.next = newNode;
    this.size += 1;
  }

  getSize() {
    return this.size;
  }

  print() {
    let result = [];
    let node = this.root;

    while (node) {
      result.push(node);
      node = node.next;
    }

    console.log("result:", result);
  }

  getList() {
    return this.root;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.add(7);
list.add(8);

list.print();
