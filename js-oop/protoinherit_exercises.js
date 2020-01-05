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

function HtmlSelectELement(...args) {
  let items = [] && [...args].flat();
  this.addItem = function(number) {
    items.push(number);
    //
  };
  this.removeItem = function(number) {
    items = items.filter(n => n !== number);
  };

  //   HtmlElement.call(this, this.click);

  //   HtmlElement.call(this, click);

  Object.defineProperty(this, "items", {
    get: function(value) {
      //   console.log(arr);
      if (typeof value !== undefined) return items;
    }
  });
}

HtmlSelectELement.prototype = {
  constructor: HtmlElement,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Object.assign(HtmlElement.prototype, clickable);
HtmlSelectELement.prototype = new HtmlElement();

const e = new HtmlElement();
const h = new HtmlSelectELement([1, 2, 3]);

console.log(h);
