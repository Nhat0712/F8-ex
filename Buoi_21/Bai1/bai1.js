function minMax(arr) {
    var min = arr[0];
    var max = arr[0];
    var minIndex = 0;
    var maxIndex = 0;
  
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
        if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }
    }
  
    return {
        min: min,
        minIndex: minIndex,
        max: max,
        maxIndex: maxIndex
    };
  }
  
  var numbers = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8];
  var result = minMax(numbers);
  
  console.log("Mảng có các số là: "+numbers);
  console.log("Số nhỏ nhất:", result.min, "vị trí:", result.minIndex);
  console.log("Số lớn nhất:", result.max, "vị trí:", result.maxIndex);
  