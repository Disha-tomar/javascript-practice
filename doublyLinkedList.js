class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (this.length == 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length == 0) {
      return undefined;
    } else {
      let currentTail = this.tail;
      this.tail = currentTail.prev;
      this.tail.next = null;
      currentTail.prev = null;
      this.length--;
      return currentTail;
    }
  }
}

doubleList = new DoubleLinkedList();
doubleList.push("sahil");
doubleList.push("hr");
doubleList.push("mba");

console.log(doubleList);
console.log(doubleList.pop());
console.log(doubleList);
