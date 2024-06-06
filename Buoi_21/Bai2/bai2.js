function primeNum(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function averagePrime(arr) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (primeNum(arr[i])) {
            sum += arr[i];
            count++;
        }
    }

    if (count === 0) {
        return "Không có số nguyên tố";
    } else {
        return sum / count;
    }
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = averagePrime(array);

console.log("Mảng có các số là: "+ array);
console.log("Trung bình của các số nguyên tố trong mảng là: "+result); 
