//program to print multiples of 5 from 1-500.
// I have kept the first 2 methods commented for
// a cleaner output.
// although all the 3 methods are functional.

//method 1:- by incrementing the counter by 5
// var num = 5;
// console.log("Method 1");
// //starting the loop
// while (num <= 500) {
//   console.log(num);
//   num = num + 5; //incrementing the counter by 5
// }

//method 2: by using the modulas operator and incrementing the reminder by 5.
// var num = 5;
// console.log("Method 2");
// //starting the loop
// while (num <= 500) {
//   if (num % 5 == 0) {
//     console.log(num);
//   }
//   num = num + 5; //incrementing the reminder by 5.
// }

// method 3:- by mutiplying the counter by 5.
var num = 1;
console.log("Method 3");
//starting the loop
while (num <= 100) {
  var res = num * 5; //mutiplying the counter by 5.
  console.log(res);
  num++; //incrementing the counter by 1
}
