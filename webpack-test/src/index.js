import { Circle } from "./circle";
// we use 'import' to import other object from our modules
// without using Webpack a temporary workaround would be to use './circle.js'

const c = new Circle(10);
c.draw();
console.log("change test");
