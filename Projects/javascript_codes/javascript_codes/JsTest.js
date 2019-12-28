function sum() {
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  sum = num1 + num2;
  // alert(sum);
  document.getElementById("ans").value = sum;
}
function sub() {
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  sum = num1 - num2;
  // alert(sum);
  document.getElementById("ans").value = sum;
}
function mul() {
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  sum = num1 * num2;
  // alert(sum);
  document.getElementById("ans").value = sum;
}
function divd() {
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  sum = num1 / num2;
  // alert(sum);
  document.getElementById("ans").value = sum;
}
