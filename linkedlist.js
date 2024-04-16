/** Node: node for a linkedlist. */

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  /** LinkedList: chained-together nodes where you can
   *  add or remove from the top or bottom. */
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    /** push(val): add new value to end of the linkedlist. Returns undefined. */
  
    push(val) {
      let node = new Node(val);
  
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        this.tail = this.tail.next;
      }
  
      this.size++;
    }
  
    /** pop(): remove the node from the top of the linkedlist
     * and return its value. Should throw an error if the linkedlist is empty. */
  
    pop() {
      if(!this.head) {
        throw new Error('LinkedList is empty!')
      } else {
        let node = this.head;
        if (!node.next) {
            const removed = node;
            this.head = null;
            this.tail = null;
            this.size--;
            return removed.val;
        }
        while (node.next.next) {
            node = node.next;
        }

        const removed = node.next;
        this.tail = node;
        this.tail.next = null;
        this.size--;
        return removed.val;
      }
    }
    unshift(val){
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.size++;
            return this.head.val;
        }
        let head = this.head;
        this.head = node;
        this.head.next = head;
        this.size++;
        return this.head.val;
    }

    shift(){
        if(!this.head) {
            throw new Error('LinkedList is empty!')
        } else {
            if (this.size === 1) this.tail = null;
            let head = this.head;
            this.head = this.head.next;
            this.size--;
            return head.val;
        }
    }
  
    /** peek(): return the value of the first node in the linkedlist. */
  
    peek() {
      if(!this.head) {
        throw new Error('LinkedList is empty!')
      } else {
        return this.head.val;
      }
    }
  
    /** isEmpty(): return true if the linkedlist is empty, otherwise false */
  
    isEmpty() {
      return this.size === 0;
    }
  }
  
  module.exports = LinkedList;