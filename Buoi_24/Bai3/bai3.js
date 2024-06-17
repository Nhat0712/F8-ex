function createUser(name, password, email) {
    return {
        name,
        password,
        email,
        role: "user"
    };
}

var data = [];
function handleRegister(name, password, email) {
    if (!name || !password || !email) {
        console.error("Thông tin đăng ký không đầy đủ");
        return;
    }
    var newUser = createUser(name, password, email);
    data.push(newUser);
    return data;
}

function handleLogin(email, password) {
    var user = data.find(user => user.email === email && user.password === password);
    if (user) {
        return user;
    } else {
        console.error("Thông tin đăng nhập không hợp lệ");
        return null;
    }
}


handleRegister("Nguyen Van A", "123456", "nguyenvana@email.com");
handleRegister("Nguyen Van B", "1234567", "nguyenvanb@email.com");
var dataLogin = handleLogin("nguyenvanb@email.com", "1234567");

console.log(data);
console.log(dataLogin);
