class Queue {
  #queue = [];

  getUnderlyingList() {

  }

  enqueue(/* value */) {

  }

  dequeue() {

  }
}

const queue = new Queue();
console.log(queue);
console.log(queue.enqueue(1)); // adds the element to the queue
console.log(queue.enqueue(3)); // adds the element to the queue
console.log(queue.dequeue()); // returns the top element from queue and deletes it, returns 1
console.log(queue.getUnderlyingList()); // returns { value: 3, next: null }
