//
// by default everything we define here will be private, unless we use the 'export' keyword
const _radius = new WeakMap();

// when we use the 'export' keyword before a class (or object) it will be exported to the outside
// 'import' will be able to use this class but we won't have access to '_radius' WeakMap
export class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log("Circle with radius " + _radius.get(this));
  }
}
