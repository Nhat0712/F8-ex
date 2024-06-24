Array.prototype.reduce2 = function(callback, initial ) {
    if (this.length === 0 && initial === undefined) {
        console.log('Reduce of empty array with no initial value');
        return; 
    }

    var accumulator = initial !== undefined ? initial : this[0];
    var startIndex = initial !== undefined ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
};

var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce2((acc, current ) => acc + current, 0);
console.log(sum); 

var emptyArray = [];
var result = emptyArray.reduce2((acc, current) => acc + current);
console.log(result);
