var km = prompt("Mời bạn nhập số KM đã sử dụng!");
km = parseFloat(km);

if (isNaN(km)) {
  prompt("CẢNH BÁO: nếu bạn nhập sai thì hệ thống sẽ không thể tính tiền!");
  document.write("Số tiền bạn nhập không hợp lệ");
} else {
  document.write("Số KM bạn đã sử dụng là: " + km + "Km" + "<br>" + "<br>");
  if (km <= 1) {
    let pay = km * 15000;
    document.write("Số tiền bạn cần thanh toán là: " + pay.toLocaleString() + "VNĐ");
  } else if (1 < km && km <= 5) {
    let pay = km * 13500;
    document.write("Số tiền bạn cần thanh toán là: " + pay.toLocaleString() + "VNĐ");
  } else if (km > 5) {
    let pay = km * 11000;
    document.write("Số tiền bạn cần thanh toán là: " + pay.toLocaleString() + "VNĐ");
  } else if (km > 120) {
    let pay = km * 11000;
    let sale = pay - pay * 0.1;
    document.write("Số tiền bạn cần thanh toán là: " + sale.toLocaleString() + "VNĐ");
  }
}
