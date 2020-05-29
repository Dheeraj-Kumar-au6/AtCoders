// program to write a function to calculate the sum of all elements in an Array

function sumArray(arr) {
  var sum = 0;

  //loop to read every indivisual array element and add them up.
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray([2, 3, 5, 6, 4, 10, 66, 4]));
