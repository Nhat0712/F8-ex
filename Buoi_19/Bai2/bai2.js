function reverseNumber(n) {
    let memo = 0;
    while (n > 0) {
      memo = memo * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    
    return memo;
  }
  
document.write(reverseNumber(prompt("Nhập vào dãy số cần đảo ngược"))); 
