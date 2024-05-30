function fibonacci(number) {
    if (number <= 1) {
        return number;
    } else {
        return fibonacci(number - 1) + fibonacci(number - 2);
    }
  }
  
  function displayFibonacci(N, memo = 0) {
    if (memo < N) {
        console.log(fibonacci(memo));
        displayFibonacci(N, memo + 1);
    }
  }
  
  var N = parseInt(prompt("Xin mời nhập N"));
  
  if (N < 0) {
    console.log("Hãy nhập vào 1 số dương.");
  } else {
    displayFibonacci(N);
  }
  