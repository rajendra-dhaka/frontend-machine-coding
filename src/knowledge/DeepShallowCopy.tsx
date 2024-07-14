import React from "react";

/*Shallow Copy
A shallow copy creates a new object or array, but instead of duplicating all nested elements recursively, it copies only the references to the nested elements.
In other words, it creates a new container (array or object) and inserts references to the same elements found in the original container.
*/
/*Deep Copy
A deep copy, on the other hand, creates a completely new independent copy of the object or array and all of its nested elements,
recursively. This means that any changes made to the deep copy do not affect the original object or array, and vice versa.
*/
const DeepShallowCopy = () => {
  /* ###########   SHALLOW COPY   ###########*/

  // We can use Array.slice() and Object.assign() to create shallow copies

  // Original array
  const originalArray = [1, 2, { a: 3 }];

  // Shallow copy using spread operator (for arrays)
  const shallowCopyArray = [...originalArray];

  // Modify the shallow copy
  shallowCopyArray[0] = 10; // Modify a primitive value
  shallowCopyArray[2].a = 30; // Modify an object property

  console.log(originalArray); // [1, 2, { a: 30 }]
  console.log(shallowCopyArray); // [10, 2, { a: 30 }]

  /* ###########   DEEP COPY   ###########*/

  // Lodash is a popular utility library for JavaScript, that provides "_.cloneDeep()" which creates a deep copy of an object.

  // Original array
  const originalArray2 = [1, 2, { a: 3 }];

  // Deep copy using JSON methods (for arrays and objects)
  const deepCopyArray = JSON.parse(JSON.stringify(originalArray2));

  // Modify the deep copy
  deepCopyArray[0] = 10; // Modify a primitive value
  deepCopyArray[2].a = 30; // Modify an object property

  console.log(originalArray2); // [1, 2, { a: 3 }]
  console.log(deepCopyArray); // [10, 2, { a: 30 }]

  return <div>DeepShallowCopy</div>;
};

export default DeepShallowCopy;
