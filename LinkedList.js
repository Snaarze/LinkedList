import { Node } from "../Project-Odin/Node.js";

export default class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    let node = new Node(value);

    if (this.head === null) {
      // If the list is empty, the new node is both the head and the tail.
      this.head = node;
      this.tail = node;
    } else {
      this.tail.nextNode = node;
      this.tail = node;
    }
  }

  prepend(value) {
    if (this.head === null) {
      this.append(value);
    } else {
    }
    let node = new Node(value);
    node.nextNode = this.head;
    this.head = node;
  }

  size() {
    let size = "";
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
      size++;
    }

    return size;
  }

  heads() {
    return console.log(this.head);
  }
  tails() {
    return console.log(this.tail);
  }

  at(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    console.log(`the current node at index is :`);
    console.log(current);
    return current;
  }

  pop() {
    let current = this.head;
    let index = 0;
    while (index < this.size() - 1) {
      current = current.nextNode;
      index++;
    }
    current.nextNode = null;
  }

  contains(value) {
    let current = this.head;
    let index = 0;
    while (this.size() > index) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
      index++;
    }

    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (this.size() > index) {
      if (current.value === value) {
        return { index, value: current.value };
      }
      current = current.nextNode;
      index++;
    }

    return null;
  }

  toString() {
    let result = "";
    let current = this.head;
    // run loops until it reaches the end to gather data
    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    // add null after the end of the while loop
    result += `null`;
    console.log(result);
  }

  insertAt(index, value) {
    let current = this.head;
    let counter = 0;
    let prev = "";
    if (index === 0) {
      return this.prepend(value);
    }

    while (counter < index) {
      current = current.nextNode;

      // get the previous connected to current and change the nextNode value
      if (counter === index - 2) {
        prev = current;
      }
      counter++;
    }

    let node = new Node(value);
    node.nextNode = current;
    current = node;
    prev.nextNode = node;
  }

  remove(index) {
    let current = this.head;
    let counter = 0;
    let prev = "";
    if (index === 0) {
      return this.prepend(value);
    }

    while (counter < index) {
      current = current.nextNode;

      // get the previous connected to current and change the nextNode value
      if (counter === index - 2) {
        prev = current;
      }
      counter++;
    }
    prev.nextNode = current.nextNode;
    current = current.nextNode;
  }
}
