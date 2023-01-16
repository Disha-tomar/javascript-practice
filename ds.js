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
    if (this.head == null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
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
    let pop = this.tail;
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
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
    }
    return pop;
  }

  shift() {
    if (!this.head) {
      return undefined;
    } else {
      let shiftedNode = this.head;

      this.head = shiftedNode.next;
      // shiftedNode.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return shiftedNode;
    }
  }

  // add a node to the beginning of the list

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let current = this.head;
    let currentIndex = 0;
    while (current) {
      if (index == currentIndex) {
        return current;
      } else {
        current = current.next;
        currentIndex++;
      }
    }
  }

  set(index, val) {
    let oldNode = this.get(index);
    if (oldNode) {
      oldNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index == this.length) {
      return !!this.push(val);
    } else if (index == 0) {
      return !!this.unshift(val);
    } else {
      let insertedNode = new Node(val);
      let nodeAtIndex = this.get(index);
      let nodeAtPrevIndex = this.get(index - 1);
      insertedNode.next = nodeAtIndex;
      nodeAtPrevIndex.next = insertedNode;
      this.length++;
      return true;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    } else if (index == this.length - 1) {
      return this.pop();
    } else if (index == 0) {
      return this.shift();
    } else {
      let nodeToBeRemoved = this.get(index);
      //
      let prevNode = this.get(index - 1);
      let afterNode = this.get(index + 1);
      prevNode.next = afterNode;

      this.length--;
      return nodeToBeRemoved;
    }
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
// console.log(list);
list.push("disha");
list.push("tomar");
list.push("garg");
console.log(list);
// console.log(list.pop());
// console.log(list);
// console.log(list.pop());
// console.log(list);
// console.log(list.pop());
// console.log(list);

// list.traverse();

// console.log(list.shift());
console.log(list);

console.log(list.unshift("Ms"));

console.log(list.get(1));

list.set(1, "kishu");
console.log(list);
list.insert(3, "sahil");
console.log(list);
console.log(list.insert(0, "first"));
console.log(list);
list.remove(3);
console.log(list);
console.log(list.reverse());
