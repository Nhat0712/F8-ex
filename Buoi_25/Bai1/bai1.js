function sumExpressions(...args) {
    let total = 0;
    
    for (let arg of args) {
        let number = Number(arg);
        if (isNaN(number)) {
            return "Dữ liệu truyền vào không hợp lệ";
        }
        total += number;
    }
    return total;
}

console.log(sumExpressions(1, 2, 3)); 
console.log(sumExpressions(1, "2", 3)); 
console.log(sumExpressions(1, "a", 3)); 