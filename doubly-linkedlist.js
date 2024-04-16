/** Node: node for a doubly-linkedlist. */

class Node {
    constructor(val) {
      this.val = val;
      this.prev = null;
      this.next = null;
    }
  }
  
  /** Doubly-linkedlist: chained-together nodes where you can
   *  add or remove from the top or bottom. */
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    /** appendright(val): add new value to end of the doubly-linkedlist. Returns undefined. */
  
    appendright(val) {
      let node = new Node(val);
  
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = this.tail.next;
      }
  
      this.size++;
    }
    
    /** popright(): remove the node from the end of the doubly-linkedlist
     * and return its value. Should throw an error if the doubly-linkedlist is empty. */
  
    popright() {
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

/** appendleft(val): add new value to beginning of the doubly-linkedlist. Returns undefined. */
   
    appendleft(val){
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.size++;
            return this.head.val;
        }
        let head = this.head;
        this.head = node;
        head.prev = node;
        node.next = head;
        this.size++;
        return this.head.val;
    }

/** popleft(): remove the node from the beginning of the doubly-linkedlist
 * and return its value. Should throw an error if the doubly-linkedlist is empty. */

    popleft(){
        if(!this.head) {
            throw new Error('LinkedList is empty!')
        } else {
            if (this.size === 1) {
                let head = this.head;
                this.head = null;
                this.tail = null;
                this.size--;
                return head;
            }
            let head = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            this.size--;
            return head.val;
        }
    }

  
    /** peekleft(): return the value of the first node in the doubly-linkedlist. */
  
    peekleft() {
      if(!this.head) {
        throw new Error('LinkedList is empty!')
      } else {
        return this.head.val;
      }
    }
  
    /** peekright(): return the value of the last node in the doubly-linkedlist. */
  
    peekright() {
      if(!this.head) {
        throw new Error('LinkedList is empty!')
      } else {
        return this.tail.val;
      }
    }
  
    /** isEmpty(): return true if the doubly-linkedlist is empty, otherwise false */
  
    isEmpty() {
      return this.size === 0;
    }
  }
  
  module.exports = DoublyLinkedList;