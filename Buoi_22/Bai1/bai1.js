var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

var result = arrA.filter(function(value){
    return arrB.includes(value);
});

console.log(result);
