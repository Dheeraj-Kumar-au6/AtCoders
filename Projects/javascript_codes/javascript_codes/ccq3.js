//program to compare two array are equal or not and print the result.

var arr = [1, 2, 3, 4, 5];
var arr1 = [1, 2, 3, 4, 5];
// to check if the array lengths are same
if (arr.length == arr1.length) {
  for (var i = 0; i < arr.length; ) {
    // checking if the array elements are same and then only incrementing the counter.
    if (arr[i] == arr1[i]) {
      i++;
    } else {
      break;
    }
  }
  // checking if the value in i is same as the lenght of the first array
  if (i == arr.length) {
    console.log("MATCH");
  } else {
    console.log("Mismatched");
  }
} else {
  console.log("Length  Mismatched");
}
