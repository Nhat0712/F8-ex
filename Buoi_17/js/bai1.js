// Bài 1:
console.log(`Bài 1:`);
var a = 10, b = 15;
console.log(`a và b ban đầu: `,`a = `, a,` và b = `, b);
a = a + b;  
b = a - b;  
a = a - b;  
console.log(`a và b sau khi hoán vị: `,`a = `, a,` và b = `, b);

// Bài 2:
console.log(`Bài 2: tính 10 + 20 + 5^10 / 2`);
const S = 10 + 20 + ((5 ** 10)/2);
console.log(S);

// Bài 3:
console.log(`Bài 3: cho 3 số 10, 20, 30`);
var a = 10;
var b = 20;
var c = 30;

var solonnhat;

if (a >= b && a >= c) {
    solonnhat = a;
} else if (b >= a && b >= c) {
    solonnhat = b;
} else {
    solonnhat = c;
}

console.log("Số lớn nhất trong ba số là: " + solonnhat );

// Bài 4:
console.log(`Bài 4: cho 2 số 10, -20`);
var a = 10;
var b = -20;


var number;
if ((a > 0 && b > 0) || (a < 0 && b < 0)) {
    number = true;
    console.log("Hai số có cùng dấu.");
} else {
    number = false;
    console.log("Hai số không có cùng dấu.");
}

// Bài 5:
console.log(`Bài 5: cho 3 số 10, -20, 30`);
var a = 10;
var b = -20;
var c = 30;

if (a > b) {
    var swap = a;
    a = b;
    b = swap;
}

if (a > c) {
    var swap = a;
    a = c;
    c = swap;
}

if (b > c) {
    var swap = b;
    b = c;
    c = swap;
}

console.log("Ba số sau khi sắp xếp tăng dần là: " + a + ", " + b + ", " + c);