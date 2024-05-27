
var n = parseInt(prompt( "Nhập số nguyên n:"));
var sum = 0;
for (var i = 1; i <= n; i++) {
    sum += i * (i + 1);
}
document.write("Số nguyên n nhập vào = " + n  + "<br>");
document.write("Giá trị của biểu thức S= 1*2 + 2*3 + 3*4 + ... + n*(n+1) với n = "+n+ " là: " + sum);
