class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
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
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  //   traverse() {
  //     let current = this.head;
  //     while (current) {
  //       console.log(current.val);
  //       current = current.next;
  //     }
  //   }

  pop() {
    let popped = this.tail;
    if (!this.head) {
      return undefined;
    } else {
      let current = this.head;
      while (current) {
        if (current.next == this.tail) {
          this.tail = current;
          current.next = null;
        } else {
          current = current.next;
        }
      }
      this.length--;
      if (this.length == 0) {
        this.head = null;
        this.tail = null;
      }
    }
    return popped;
  }

  //   remove a node from the beginning

  shift() {
    let shifted = this.head;
    if (!this.head) {
      return undefined;
    } else {
      this.head = this.shifted.next;
      this.length--;
      if (this.length == 0) {
        this.head = null;
        this.tail = null;
      }
      return shifted;
    }
  }

  //   add a node at the beginning

  unshift(val) {
    let newNode = new Node(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let temp = this.head;
      this.head = newNode;
      newNode.next = temp;
    }
    this.length++;
  }

  get(index) {
    if (index >= this.length || index < 0) {
      return null;
    } else if (index == 0) {
      return this.head;
    } else if (index == this.length - 1) {
      return this.tail;
    } else {
      let currentIndex = 0;
      let currentNode = this.head;
      while (currentNode) {
        if (index == currentIndex) {
          return currentNode;
        } else {
          currentIndex++;
          currentNode = currentNode.next;
        }
      }
    }
  }

  //   set value of an index

  set(index, val) {
    let existingNode = this.get(index);
    if (existingNode) {
      existingNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index >= this.length || index < 0) {
      return false;
    } else if (index == 0) {
      this.unshift(val);
    } else if (index == this.length - 1) {
      this.push(val);
    } else {
      let insertNode = new Node(val);
      let prevNode = this.get(index - 1);
      let nextNode = this.get(index);
      insertNode.next = nextNode;
      prevNode.next = insertNode;
      this.length++;
      return true;
    }
  }

  remove(index) {
    if (index >= this.length || index < 0) {
      return false;
    } else if (index == 0) {
      this.shift();
    } else if (index == this.length - 1) {
      this.pop();
    } else {
      let nodeToBeRemoved = this.get(index);
      let prevNode = this.get(index - 1);
      let nextNode = this.get(index + 1);
      prevNode.next = nextNode;
      this.length--;

      return nodeToBeRemoved;
    }
  }

  reverse() {
    // swap head and tail
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    console.log(temp);
    for (let i = 0; i < this.length; i++) {
      console.log(temp);
    }
  }
}

let list = new SinglyLinkedList();

list.push("disha");
list.push("tomar");
console.log(list);
list.push("sahil");
list.push("garg");

list.unshift("Ms");

console.log(list);

console.log(list.get(2));

list.insert(3, "developer");
console.log(list);

list.remove(3);
console.log(list);

console.log(list.reverse());
