//program that takes an array and returns only the even numbers of the array.

function getEven(arr) {
  var arr1 = []; // arr1 to store and print even number array
  for (var i = 0; i < arr.length; i++) {
    // running the loop through the enter array to seperate elements and check if the number is even

    // to check if the element is even
    if (arr[i] % 2 === 0) {
      arr1.push(arr[i]);
    }
  }
  return arr1; // returns the array of even numbers
}
console.log(
  getEven([
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
