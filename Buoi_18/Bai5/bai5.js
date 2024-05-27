var N = prompt("Hãy nhập vào số dòng:");
let lineNumber = 1;
for (let i = 1; i <= N; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
        line += lineNumber + " ";
        lineNumber++;
    }
    document.write(line + "<br>");
}