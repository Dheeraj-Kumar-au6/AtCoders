// program to print either a number is odd or even starting from 100 to 1

// initilizing i as 100
var i = 100;
while (i >= 1) {
  // first condition to check if the number is even and then print it
  if (i % 2 == 0) {
    console.log(i, "------->EVEN");
  }
  // second condition to check if the number is odd and then print it
  if (i % 2 == 1) {
    console.log(i, "-------->ODD");
  }
  i--; // decrementing the value of i.
}
