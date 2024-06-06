function arrange(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

function addNum(arr, num) {
    let n = arr.length;
    let newArr = new Array(n + 1);
    let inserted = false;

    for (let i = 0, j = 0; i < n; i++, j++) {
        if (!inserted && arr[i] > num) {
            newArr[j] = num;
            j++;
            inserted = true;
        }
        newArr[j] = arr[i];
    }
    
    if (!inserted) {
        newArr[n] = num;
    }
    
    return newArr;
}

let arr = [5,1,9,8,10];
console.log("Mảng ban đầu:", arr);

arrange(arr);
console.log("Mảng sau khi sắp xếp:", arr);

let numToInsert = 4;
let newArr = addNum(arr, numToInsert);
console.log("Mảng sau khi thêm số:", newArr);
