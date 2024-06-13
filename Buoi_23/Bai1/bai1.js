function symmetricalNum(num) {
  const str = num.toString();
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

function prime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function smallPrimeNum(n) {
  let num = n;
  while (true) {
    if (symmetricalNum(num) && prime(num)) {
      return num;
    }
    num++;
  }
}

const n = prompt("Xin mời nhập vào n: ");
console.log(
  "Số nguyên tố đối xứng nhỏ nhất lớn hơn hoặc bằng " +
    n +
    " là: " +
    smallPrimeNum(n)
);
