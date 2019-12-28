//Sum of all elements in an Array

var sum = 0;
var arr1 = [1, 2, 3, 4, 5, 5, 6, 4, 9, 10, 1, 10];

//loop to read every indivisual array element and add them up.
for (var i = 0; i < arr1.length; i++) {
  sum += arr1[i];
}
console.log("SUM OF THE ARRAY IS :", sum);
