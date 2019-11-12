import { Person } from "./person"; // ./ for current directory

// named exports: able to export one or more objects from a given module
export function promote() {}

// the objects that we define in a module are Private by default - not accessible from outside unless we export them
export default class Teacher extends Person {
  // base class is refered to after 'extends'
  // with custom constructor we need to call the constructor of the Person class
  // whenever we add constructor to a child class, we need to call the constructor of its parent class
  constructor(name, degree) {
    // 'super' references the parent class - we call it just like a meethod()
    super(name); // initialize "name" preperty by passing the "name" argument
    this.degree = degree;
  }
  teach() {
    console.log("teaching");
  }
}

// prefix the class with 'export'
