Array.prototype.filter2 = function(callback, thisArg) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback.call(thisArg, this[i], i, this)) {
            result.push(this[i]);
        }
    }

    return result;
};

let arr = [1, 2, 3, 4, 5, 6];
let evenNumbers = arr.filter2(function(element) {
    return element % 2 === 0;
});
console.log(evenNumbers); 
