var arr = [["a", 1, true], ["b", 2, false]];

var strings = [];
var numbers = [];
var booleans = [];

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        var item = arr[i][j];
        if (typeof item === "string") {
            strings.push(item);
        } else if (typeof item === "number") {
            numbers.push(item);
        } else if (typeof item === "boolean") {
            booleans.push(item);
        }
    }
}

var result = [strings, numbers, booleans];
console.log(result);