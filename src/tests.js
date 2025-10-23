class Stack {
  #stack = [];

  push(value) {
    this.#stack.push(value);
  }

  pop() {
    return this.#stack.pop();
  }

  peek() {
    return this.#stack.at(-1);
  }
}

const stack = new Stack();
console.log(stack);

console.log(stack.push(1)); // adds the element to the stack
console.log(stack.peek()); // returns the peek, but doesn't delete it, returns 1
console.log(stack.pop()); // returns the top element from stack and deletes it, returns 1
console.log(stack.pop()); // undefined
