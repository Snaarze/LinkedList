import linkedList from "./LinkedList.js";
class Hashmap {
  constructor() {
    this.capacity = 16;
    this.load_factor = 0.75;
    this.bucket = new Array(16);
  }

  // can work as clear() method too as requirements
  initializedBucket() {
    for (let i = 0; i < this.bucket.length; i++) {
      this.bucket[i] = new linkedList();
    }
  }

  resize() {
    let maxSize = this.length() / this.capacity;
    // restore the array temporary to copy the values and keys to the new array
    let oldCopyOfArray = this.bucket;
    // if maxSize is greater than the Load_factor, re-initiate the array then double the sized
    if (maxSize >= this.load_factor) {
      this.capacity = this.capacity * 2;
      // create nwe array with double sized from the previous sized
      this.bucket = new Array(this.capacity);
      // fill the empty values as linkedlist
      this.initializedBucket();

      for (let i = 0; i < oldCopyOfArray.length; i++) {
        let current = oldCopyOfArray[i].head;
        while (current) {
          // if there are current and nextNode proceed of appending old Nodes to the nwe array
          this.bucket[this.hash(current.key)].append([
            current.key,
            current.value,
          ]);
          current = current.nextNode;
        }
      }
    }
  }

  // convert the keys to hashCode
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return (hashCode = hashCode % this.capacity);
  }

  // return the bucket with their head properties
  getBucket() {
    // create new array to store the bucket properties
    let nodeOfBucket = [];
    // iterate through the array to print all the head, nodes, nextNode
    for (let i = 0; i < this.bucket.length; i++) {
      let current = this.bucket[i];
      // if there are current.nextNode proceed pushing values
      while (current) {
        nodeOfBucket.push(current.head);
        current = current.nextNode;
      }
    }
    // return the bucket
    return nodeOfBucket;
  }

  // this function can create new nodes, modify if there are existing hashCode in the node
  set(key, value) {
    // if the current load_factor exceeeds the requirement, resized the array and doubled it sized to rehash the current key and values
    // before proceeding of appending new values
    this.resize();
    let index = this.hash(key);
    // if there is a existign key inside the node update the value of it
    if (this.bucket[index].head && this.bucket[index].head.key === key) {
      this.bucket[index].head.value = value;
      return;
    }
    // if there is no existing node that matches the key, add node
    this.bucket[index].append(key, value);
    console.log("Load_factor" + this.length() / this.capacity);
  }

  get(key) {
    let index = this.hash(key);
    let current = this.bucket[index].head;
    let isFound = false;
    // iterate through the node
    while (current) {
      if (current.key === key) {
        console.log(current.value);
        isFound = true;
        break;
      }
      current = current.nextNode;
    }
    // if key wasnt found in the node return null
    if (!isFound) {
      return console.log(null);
    }
  }

  has(key) {
    return this.bucket[this.hash(key)].contains(key);
  }

  remove(key) {
    let isFound = this.bucket[this.hash(key)].contains(key);
    let index = 0;
    if (isFound) {
      let current = this.bucket[this.hash(key)].head;
      while (current) {
        if (current.key === key) {
          break;
        }
        index++;
        current = current.nextNode;
      }

      this.bucket[this.hash(key)].remove(index);
      return true;
    }

    return false;
  }

  length() {
    return this.entries().length;
  }

  keys() {
    let entriesOfArray = [];

    for (let i = 0; i < this.bucket.length; i++) {
      let current = this.bucket[i].head;
      // if the current head is null skip
      if (!current) {
        continue;
      }

      // if there are nextNode in the current head proceed pushing to the array
      while (current) {
        entriesOfArray.push({ key: current.key });
        current = current.nextNode;
      }
    }
    // return the array of entries
    return entriesOfArray;
  }

  values() {
    let entriesOfArray = [];

    for (let i = 0; i < this.bucket.length; i++) {
      let current = this.bucket[i].head;
      // if the current head is null skip
      if (!current) {
        continue;
      }

      // if there are nextNode in the current head proceed pushing to the array
      while (current) {
        entriesOfArray.push({ value: current.value });
        current = current.nextNode;
      }
    }
    // return the array of entries
    return entriesOfArray;
  }

  entries() {
    let entriesOfArray = [];

    for (let i = 0; i < this.bucket.length; i++) {
      let current = this.bucket[i].head;
      // if the current head is null skip
      if (!current) {
        continue;
      }

      // if there are nextNode in the current head proceed pushing to the array
      while (current) {
        entriesOfArray.push([current.key, current.value]);
        current = current.nextNode;
      }
    }
    // return the array of entries
    console.log("bucket Length " + this.bucket.length);
    return entriesOfArray;
  }
}

let test = new Hashmap();
test.initializedBucket();
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
test.set("moon", "silver");

console.log(test.getBucket());
// console.log(test.keys());
// console.log(test.values());
// console.log(test.length());
console.log(test.hash("moon"));
console.log(test.hash("elephant"));
