// program to print this pattern
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

// setting the height as h and initilizing it as 5
var h = 5;
//the first parent loop for the straight pattern
for (var i = 0; i <= h; i++) {
  var row = "";
  // the first child loop for the straight pattern
  for (var j = 1; j <= i; j++) {
    row += "*";
  }
  //printing the first pattern
  console.log(row);
}
//the second parent loop for the revers pattern
for (var a = 2; a <= h; a++) {
  var row = "";
  //the second child loop for the revers pattern
  for (var b = 1; b <= h - a + 1; b++) {
    row += "*";
  }
  //printing the revers partten
  console.log(row);
}
