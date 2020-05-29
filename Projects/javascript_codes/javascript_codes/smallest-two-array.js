// program to print the smallest element of two arrays.
function samllest(arr1, arr2) {
  //declaring an empty array.
  var arr = [];
  // combining the 2 arrays in to one array using the push method
  arr.push(...arr1, ...arr2);
  // declaring a variable small that will store the smallest array element
  var small = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (small > arr[i]) {
      small = arr[i];
    }
  }
  console.log("Conbined array is:", arr);
  return small;
}
var array1 = [5, 6, 7, 8, 9, 10];
var array2 = [4, 2, 3, 8];
var res = samllest(array1, array2);
console.log("Smallest element of the array is:", res);
