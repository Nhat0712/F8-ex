var electricNumber = prompt("Hãy nhập số điện bạn đã sử dụng!");

electricNumber = parseFloat(electricNumber);

if (isNaN(electricNumber) || electricNumber <= 0) {
  prompt("CẢNH BÁO: nếu bạn nhập sai thì hệ thống sẽ không thể tính tiền!");
  document.write("Số điện bạn nhập không hợp lệ");
} else {
  document.write(
    "Số điện bạn đã sử dụng là: " + electricNumber + " (kWh)" + "<br>" + "<br>"
  );
  if (electricNumber > 0 && electricNumber <= 50) {
    let electricBill = electricNumber * 1678;
    document.write("Hóa đơn tiền điện của bạn là: " + electricBill.toLocaleString() + " (VNĐ)");
  } else if (electricNumber > 50 && electricNumber <= 100) {
    let electricBill = electricNumber * 1734;
    document.write("Hóa đơn tiền điện của bạn là: " + electricBill.toLocaleString() + " (VNĐ)");
  } else if (electricNumber > 100 && electricNumber <= 200) {
    let electricBill = electricNumber * 2014;
    document.write("Hóa đơn tiền điện của bạn là: " + electricBill.toLocaleString() + " (VNĐ)");
  } else if (electricNumber > 200 && electricNumber <= 300) {
    let electricBill = electricNumber * 2536;
    document.write("Hóa đơn tiền điện của bạn là: " + electricBill.toLocaleString() + " (VNĐ)");
  } else if (electricNumber > 300 && electricNumber <= 400) {
    let electricBill = electricNumber * 2834;
    document.write("Hóa đơn tiền điện của bạn là: " + electricBill.toLocaleString() + " (VNĐ)");
  } else if (electricNumber > 400 ) {
    let electricBill = electricNumber * 2927;
    document.write("Hóa đơn tiền điện của bạn là: " + electricBill.toLocaleString() + " (VNĐ)");
  }
}
