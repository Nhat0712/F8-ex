function numberWord(n) {
  if (n < 0 || n > 9999) {
    return "Số bạn nhập vào ngoài khoảng cho phép";
  }

  let result = "";

  let thousand = Math.floor(n / 1000);
  if (thousand > 0) {
    if (thousand === 1) {
      result += " một ngàn";
    } else if (thousand === 2) {
      result += " hai ngàn";
    } else if (thousand === 3) {
      result += " ba ngàn";
    } else if (thousand === 4) {
      result += " bốn ngàn";
    } else if (thousand === 5) {
      result += " năm ngàn";
    } else if (thousand === 6) {
      result += " sáu ngàn";
    } else if (thousand === 7) {
      result += " bảy ngàn";
    } else if (thousand === 8) {
      result += " tám ngàn";
    } else if (thousand === 9) {
      result += " chín ngàn";
    }
  }

  let hundred = Math.floor((n % 1000) / 100);
  if (hundred > 0) {
    if (hundred === 1) {
      result += " một trăm";
    } else if (hundred === 2) {
      result += " hai trăm";
    } else if (hundred === 3) {
      result += " ba trăm";
    } else if (hundred === 4) {
      result += " bốn trăm";
    } else if (hundred === 5) {
      result += " năm trăm";
    } else if (hundred === 6) {
      result += " sáu trăm";
    } else if (hundred === 7) {
      result += " bảy trăm";
    } else if (hundred === 8) {
      result += " tám trăm";
    } else if (hundred === 9) {
      result += " chín trăm";
    }
  } else {
    result += " không trăm";
  }

  let ten = Math.floor((n % 100) / 10);
  if (ten > 0) {
    if (ten === 1) {
      result += " mười";
    } else if (ten === 2) {
      result += " hai mươi";
    } else if (ten === 3) {
      result += " ba mươi";
    } else if (ten === 4) {
      result += " bốn mươi";
    } else if (ten === 5) {
      result += " năm mươi";
    } else if (ten === 6) {
      result += " sáu mươi";
    } else if (ten === 7) {
      result += " bảy mươi";
    } else if (ten === 8) {
      result += " tám mươi";
    } else if (ten === 9) {
      result += " chín mươi";
    }
  } else {
    result += " lẻ";
  }

  let unit = n % 10;
  if (unit > 0) {
    if (unit === 1) {
      result += " một";
    } else if (unit === 2) {
      result += " hai";
    } else if (unit === 3) {
      result += " ba";
    } else if (unit === 4) {
      result += " bốn";
    } else if (unit === 5) {
      if (ten === 1) {
        result += " lăm";
      } else {
        result += " năm";
      }
    } else if (unit === 6) {
      result += " sáu";
    } else if (unit === 7) {
      result += " bảy";
    } else if (unit === 8) {
      result += " tám";
    } else if (unit === 9) {
      result += " chín";
    }
  }

  return result;
}

console.log(numberWord(prompt("Hãy nhập vào số cần chuyển đổi")));
