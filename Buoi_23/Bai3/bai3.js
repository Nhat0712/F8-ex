function findSmallesInteger(nums) {
    nums.sort((a, b) => a - b);
    let smallestInteger  = 1;
    for (let num of nums) {
        if (num === smallestInteger) {
            smallestInteger++;
        }
    }
    return smallestInteger;
}

const arr = [1, 2,3,4, 0];
console.log("Mảng số nguyên cho trước là : "+ arr);
console.log("Số nguyên dương nhỏ nhất không có trong mảng là: " + findSmallesInteger(arr)); 

