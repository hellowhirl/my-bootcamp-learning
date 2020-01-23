const _currentStack = new WeakMap();

class Stack {
  constructor(count = 0, stack = []) {
    this.count = count;
    _currentStack.set(this, stack);
  }

  pop() {
    if (this.count === 0) throw new Error("no items in stack");
    this.count--;
    _currentStack.get(this).pop();
  }

  push(value) {
    this.count++;
    _currentStack.get(this).push(value);
  }

  peek() {
    if (this.count === 0) throw new Error("no items in stack");
    return _currentStack.get(this)[this.count - 1];
  }
}

const stack1 = new Stack();
