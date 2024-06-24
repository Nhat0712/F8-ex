Array.prototype.push2 = function(...items) {
    let length = this.length;
    for (let i = 0; i < items.length; i++) {
        this[length + i] = items[i];
    }
    return this.length;
};

let arr = [1, 2, 3];
console.log(arr.push2(4, 5, 6)); 
console.log(arr); 
