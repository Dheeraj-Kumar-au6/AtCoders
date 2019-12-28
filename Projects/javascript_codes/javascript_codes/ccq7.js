//program to print the second largest element in an aray

var arr = [100, 200, 300, 400, 500, 700];
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
console.log(seclarge); // printing the second largest element in the array.
