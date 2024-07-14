const CreateArray = () => {
  /* Manual way to create a 2D array */
  const array1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  /* Creating [ARRAY] using new Array(x).fill([]) method and using object or an array as the fill value, all elements of [ARRAY] will reference the same object or array.*/
  /* Creating [ARRAY] using Array.from({ length: 3 }, () =>[]) method, Each element is independently set by the mapping function, so if you use an object or array,
    each element gets its own independent instance.*/

  /* Create a 2D array Using Array.from() */
  const array2 = Array.from({ length: 3 }, () =>
    Array.from({ length: 3 }, () => 1)
  );

  /* Create a 2D array Using [new Array.fill()] */
  const array3 = new Array(3).fill(null).map(() => new Array(3).fill("W"));

  /* Create a 2D array Using Loops */

  const array4 = [];

  for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      row.push(i * 3 + j + 1);
    }
    array4.push(row);
  }

  console.log(array1, array2, array3, array4);

  return <div>CreateArray</div>;
};

export default CreateArray;
