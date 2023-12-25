const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.top = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.top;
  }

  enqueue(value) {
    const addNode = new ListNode(value);
    if (!this.top) {
      this.top = addNode;
      this.tail = addNode;
    } else {
      this.tail.next = addNode;
      this.tail = addNode;
    }
  }

  dequeue() {
    const delNode = this.top.value;
    this.top = this.top.next;
    if (!this.top) {
      this.tail = null;
    }
    return delNode;
  }
}

module.exports = {
  Queue,
};
