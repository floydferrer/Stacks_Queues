/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let node = new Node(val);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(!this.first) {
      throw new Error('Queue is empty!')
    } else {
      let first = this.first.val;
      if (this.size === 1) this.last = this.first.next;
      this.first = this.first.next;
      this.size--;
      return first;
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if(!this.first) {
      throw new Error('Queue is empty!')
    } else {
      return this.first.val;
    }
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(!this.first) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Queue;
