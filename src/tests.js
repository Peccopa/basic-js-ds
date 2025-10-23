// const { ListNode } = require('../extensions/list-node.js');

// class Queue {
//   #head = null;
//   #tail = null;

//   getUnderlyingList() {
//     return this.#head;
//   }

//   enqueue(value) {
//     const node = new ListNode(value);
//     if (this.#head) {
//       this.#tail.next = node;
//       this.#tail = node;
//     } else {
//       this.#head = node;
//       this.#tail = node;
//     }
//   }

//   dequeue() {
//     if (!this.#head) return undefined;
//     const head = this.#head.value;
//     this.#head = this.#head.next;
//     return head;
//   }
// }

// const queue = new Queue();
// console.log(queue);
// console.log(queue.enqueue(1)); // adds the element to the queue
// console.log(queue.enqueue(3)); // adds the element to the queue
// console.log(queue.dequeue()); // returns the top element from queue and deletes it, returns 1
// console.log(queue.getUnderlyingList()); // returns { value: 3, next: null }
