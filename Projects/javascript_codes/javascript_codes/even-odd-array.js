//program that takes an array and returns the even and odd numbers of the array.
// in seperate arrays.

function eve_Array(arr) {
  var arr1 = []; // arr1 to store and print even number array
  var arr2 = []; // aar2 to store and print odd number array
  for (var i = 0; i < arr.length; i++) {
    // running the loop through the enter array to seperate elements and check if the odd or even

    if (arr[i] % 2 === 0) {
      // to check if the element is even
      arr1.push(arr[i]);
    }
    if (arr[i] % 2 === 1) {
      // to check if the element is odd
      arr2.push(arr[i]);
    }
  }
  // use return arr1 to print even number array and arr2 to print the odd number array

  return arr1; // returns the array of even numbers
  //return arr2; // returns the array of odd numbers.
}
console.log(
  eve_Array([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
  ])
);
