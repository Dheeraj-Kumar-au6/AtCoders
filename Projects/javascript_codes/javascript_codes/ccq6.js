//program to print the largest element in an array.

var arr = [10, 2, 56, 78, 33, 4];
var large = 0; // declaring a variable 'large' with value 0
var seclarge = 0; // declaring a variable 'second large' with value 0

// starting the loop to check the array length
for (var i = 0; i < arr.length; i++) {
  // starting the sort
  if (large < arr[i]) {
    seclarge = large;
    large = arr[i];
  } else if (seclarge < arr[i]) {
    if (arr[i] != large) {
      seclarge = arr[i];
    }
  }
}
console.log(large); // printing the largest element in the array.
