function findMedian(nums1, nums2) {
    var graftingArray  = graftingArrays(nums1, nums2);
    var len = graftingArray.length;
    if (len % 2 === 0) {
        return (graftingArray[len / 2 - 1] + graftingArray[len / 2]) / 2;
    } else {
        return graftingArray[Math.floor(len / 2)];
    }
}

function graftingArrays(arr1, arr2) {
    const grafted = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            grafted.push(arr1[i]);
            i++;
        } else {
            grafted.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        grafted.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        grafted.push(arr2[j]);
        j++;
    }

    return grafted;
}

const array1 = [1, 3];
const array2 = [2, 4];
console.log("Mảng 1: " + array1);
console.log("Mảng 2: " + array2);

console.log("Trung vị của 2 mảng trên là: " +findMedian(array1, array2)); 