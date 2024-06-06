function filter(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      var exists = false;
      for (var j = 0; j < result.length; j++) {
        if (arr[i] === result[j]) {
          exists = true;
          break;
        }
      }
      if (!exists) {
        result[result.length] = arr[i];
      }
    }
    return result;
  }
  
  var arr = [1, 2, 2, 3, 4, 4, 5, 1];
  var filterArr = filter(arr);
  console.log("Các số trong mảng có: " + arr);
  console.log("Mảng sau khi lọc trùng: " + filterArr);
  