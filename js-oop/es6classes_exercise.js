const _currentStack = new WeakMap();

class Stack {
  constructor() {
    _currentStack.set(this, []);
  }

  pop() {
    const itemStack = _currentStack.get(this);

    if (itemStack.length === 0) throw new Error("no items in stack");

    itemStack.pop();
  }

  push(value) {
    _currentStack.get(this).push(value);
  }

  peek() {
    const itemStack = _currentStack.get(this);

    if (itemStack.length === 0) throw new Error("no items in stack");

    return itemStack[itemStack.length - 1];
  }

  get count() {
    return _currentStack.get(this).length;
  }
}

const stack1 = new Stack();
