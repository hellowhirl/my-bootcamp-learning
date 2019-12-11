import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  // calculate starting index of items on pageNumber
  const startIndex = (pageNumber - 1) * pageSize;

  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
  // // go to start index and take all the items for the current page
  //   _.slice(items, startIndex);
  // // with new array we can go to this array and pick items for the current page
  //   _.take();
  // // convert to regular array
  //   _.value();
}
