class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  size() {
    console.log(this.length);
    return this.length;
  }

  headPointer() {
    console.log(this.head);
    return this.head;
  }

  print() {
    let currentNode = this.head;

    console.group("Linked List");
    while (currentNode) {
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
    console.groupEnd();
  }

  add(element) {
    const node = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.size++;
  }

  remove(element) {
    let currentNode = this.head;
    let previousNode;
    if (currentNode.element === element) {
      this.head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      console.log(currentNode);
      previousNode.next = currentNode.next;
    }
    this.size--;
  }

  indexOf(element) {
    let currentNode = this.head;
    let index = -1;
    console.group(`Index of ${element}`);
    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        console.log(index);
        return index;
      }
      currentNode = currentNode.next;
    }
    console.groupEnd();
    return -1;
  }

  elementAt(index) {
    let currentNode = this.head;
    let count = 0;
    console.group(`Element at ${index}`);
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    console.log(currentNode.element);
    console.groupEnd();
    return currentNode.element;
  }

  addAt(index, element) {
    let node = new Node(element);
    let currentNode = this.head;
    let currentIndex = 0;
    let previousNode;

    if (index > this.size) {
      return false;
    }

    if (index === 0) {
      node.next = currentNode;
      this.head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    this.size++;
  }

  removeAt(index) {
    let currentNode = this.head;
    let currentIndex = 0;
    let previousNode;

    if (index >= this.size || index < 0) {
      return false;
    }

    if (index === 0) {
      this.head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    this.size++;
  }
}

const list = new LinkedList();
list.add(100);
list.add(200);
list.add(300);
list.add(400);
list.add(500);
list.print();

list.addAt(3, 1000);
list.print();
list.removeAt(3);
list.print();
