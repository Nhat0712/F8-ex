Number.prototype.getCurrency = function(currency) {
    return this.toLocaleString('vi-VN') + ' ' + currency;
};
String.prototype.getCurrency = function(currency) {
    let number = Number(this);
    if (isNaN(number)) {
        return "Dữ liệu không hợp lệ";
    }
    return number.toLocaleString('vi-VN') + ' ' + currency;
};

var price1 = 12000;
console.log(price1.getCurrency('đ')); 

var price2 = "12000000";
console.log(price2.getCurrency('đ'));

