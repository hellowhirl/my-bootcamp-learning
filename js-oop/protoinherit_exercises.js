// design 2 objects
// HtmlElement (Parent)
// HtmlSelectELement (reprensents a drop down list)

function HtmlElement() {
  this.click = function() {
    console.log("clicked");
  };
  // HTMLSelectElement.call(this, this.click);
}

HtmlElement.prototype.focus = function() {
  console.log("focused");
};

// const clickable = {
//   click: function() {
//     console.log("clicked");
//   }
// };

function HtmlSelectELement(items = []) {
  this.items = items;

  this.addItem = function(item) {
    items.push(item);
  };
  this.removeItem = function(item) {
    this.items.splice(this.items.indexOf(item), 1);
  };
  this.render = function() {
    // const options = this.items.map(item => `<option>${item}</option>`).join("");
    // return `<select>${options}</select>`;
    // this code can be implemented as below:
    return `
<select>${this.items
      .map(
        item => `
  <option>${item}</option>`
      )
      .join("")}
</select>`;
  };
}

// arrow function example - function expression ?????

function HtmlImageElement(src) {
  this.src = src;

  this.render = function() {
    return `<img src="${this.src}" />`;
  };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

// below creates an empty object that has its prototype set to HtmlElement - with this impolementation
// we do not inherit the own method of click on the HtmlElement object to HtmlSelectElement
// HtmlSelectElement.prototype = Object.assign(HtmlElement.prototype, clickable);

// here we set the prototype of an object to an instance of an object
HtmlSelectELement.prototype = new HtmlElement();
HtmlSelectELement.prototype.constructor = HtmlSelectELement;

// implementing inheritance is far easier in ES6

const e = new HtmlElement();
const h = new HtmlSelectELement([1, 2, 3, 4, 5]);

const elements = [
  new HtmlSelectELement([1, 2, 3]),
  new HtmlImageElement("http://")
];

for (let element of elements) console.log(element.render());
