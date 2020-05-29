//program to create a function that takes a number and returns true if the
//number is odd and false if the number is not.

function odd(a) {
  if (a % 2 == 1) {
    return true;
  } else {
    return false;
  }
}
console.log(odd(5));

//same programe but it takes input from the user please run it on repl as the
//prompt() only works there as far as i know.

// function odd(a) {
//   if (a % 2 == 1) {
//     return true;
//   } else {
//     return false;
//   }
// }
// var b = Number(prompt("Enter a number:", ""));
// console.log(odd(b));
