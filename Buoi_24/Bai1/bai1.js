var errors = {
    name: {
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự"
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email"
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại"
    }
}

function getError(field) {
    let fields = field.split(".");
    let currentError = errors;

    for (let i = 0; i < fields.length; i++) {
        if (currentError[fields[i]]) {
            currentError = currentError[fields[i]];
        } else {
            return "required";
        }
    }

    if (typeof currentError === "string") {
        return currentError;
    } else {
        for (let key of Object.keys(currentError)) {
            return currentError[key];
        }
    }
}


console.log(getError("name")); 
console.log(getError("name.min"));
console.log(getError("email"));
console.log(getError("email.unique")); 
console.log(getError("password")); 
console.log(getError("password.same"));
