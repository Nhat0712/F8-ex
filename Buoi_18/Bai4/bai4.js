
var numberCheck = parseInt(prompt("Nhập số cần kiểm tra:"));


var check = true;

if (numberCheck <= 1) {
    check = false;
} else {
  for (var i = 2; i <= Math.sqrt(numberCheck); i++) {
    if (numberCheck % i === 0) {
        check = false;
      break;
    }
  }
}

if (check) {
  document.write(numberCheck + " là số nguyên tố.");
} else {
  document.write(numberCheck + " không phải là số nguyên tố.");
}
